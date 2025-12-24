<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as echarts from 'echarts';
type EChartsOption = echarts.EChartsOption;
import { GetSyntaticTreeResDTO } from '@/common/modules/data.dto';

@Options({})
export default class SyntaticTree extends Vue {
  testData: GetSyntaticTreeResDTO = {
    type: 'program',
    name: null,
    value: null,
    son: [
      {
        type: 'function_list',
        name: null,
        value: null,
        son: [
          {
            type: 'function',
            name: 'foo',
            value: null,
            son: [],
          },
          {
            type: 'function',
            name: 'main',
            value: null,
            son: [],
          },
        ],
      },
    ],
  };

  chartDOM: HTMLElement | null = null;
  myChart: echarts.ECharts | null = null;
  option: EChartsOption | null = null;
  mounted(): void {
    this.$nextTick(() => {
      this.chartDOM = document.getElementById('main')!;
      this.myChart = echarts.init(this.chartDOM, 'dark');
      this.option = {
        title: {
          text: 'Syntactic Tree',
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [

          {
            type: 'graph',
            layout: 'none',
            width: '100%',
            symbolSize: 50,
            roam: true,
            label: {
              show: true,
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20,
            },
            data: this.seriesData,
            links: this.seriesLinks,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0,
            },
          },
        ],
      };
      this.myChart.setOption(this.option);
      this.myChart.resize();
    });
  }

  get seriesData(): Array<{ name: string; x: number; y: number }> {
    const data: Array<{ name: string; x: number; y: number }> = [];
    const levelMap: Record<number, number> = {};
    const traverse = (node: GetSyntaticTreeResDTO, level: number) => {
      if (!levelMap[level]) levelMap[level] = 0;
      const x = levelMap[level] * 250;
      const y = level * 100;
      data.push({
        name: node.name ? `${node.type}:${node.name}` : node.type,
        x,
        y,
      });
      levelMap[level]++;
      if (node.son && node.son.length > 0) {
        node.son.forEach((child) => traverse(child, level + 1));
      }
    };
    traverse(this.testData, 0);
    return data;
  }

  get seriesLinks(): Array<{ source: string; target: string }> {
    const links: Array<{ source: string; target: string }> = [];
    const traverse = (node: GetSyntaticTreeResDTO) => {
      if (node.son && node.son.length > 0) {
        node.son.forEach((child) => {
          links.push({
            source: node.name ? `${node.type}:${node.name}` : node.type,
            target: child.name ? `${child.type}:${child.name}` : child.type,
          });
          traverse(child);
        });
      }
    };
    traverse(this.testData);
    return links;
  }
}
</script>

<template>
  <div class="tree-container" id="main"></div>
</template>

<style scoped lang="less">
.tree-container {
  width: 600px;
  height: 600px;
}
</style>
