<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import * as echarts from 'echarts';
import { Prop, Watch } from 'vue-property-decorator';
type EChartsOption = echarts.EChartsOption;
import { SyntaticTreeState } from '@/common/interface/data.vo';
import { CodeState } from '@/common/enum/data.enum';
import { ElButton } from 'element-plus';

@Options({
  components: {
    ElButton,
  },
})
export default class SyntaticTree extends Vue {
  @Prop({ required: true })
  testData!: SyntaticTreeState;

  @Prop({ required: true })
  codeState!: CodeState;

  private chartDOM: HTMLElement;
  private myChart: echarts.ECharts | null = null;
  private option: EChartsOption | null = null;
  private showModal = false;

  fullscreen() {
    this.showModal = true;
    this.$nextTick(() => {
      // 重新初始化大画布
      const modalChart = this.$refs.modalChartRef as HTMLElement;
      if (modalChart) {
        const option = this.option;
        const modalEchart = echarts.init(modalChart, 'dark');
        modalEchart.setOption(option!);
        modalEchart.resize();
        // 关闭时销毁
        (this as any)._modalEchart = modalEchart;
      }
    });
  }

  closeModal() {
    this.showModal = false;
    // 销毁模态图表实例
    if ((this as any)._modalEchart) {
      (this as any)._modalEchart.dispose();
      (this as any)._modalEchart = null;
    }
  }

  mounted(): void {
    console.log('Syntactic tree data:', this.testData);
    this.$nextTick(() => {
      this.option = {
        tooltip: {},
        series: [
          {
            type: 'tree',
            data: [this.treeData()],
            top: '5%',
            left: '10%',
            bottom: '5%',
            right: '10%',
            symbolSize: 50,
            orient: 'TB',
            layout: 'orthogonal',
            label: {
              position: 'top',
              verticalAlign: 'middle',
              align: 'center',
              fontSize: 14,
              formatter: function (params) {
                if (typeof params.data === 'object' && params.data && 'name' in params.data) {
                  return (params.data as any).name;
                }
                return '';
              },
            },
            lineStyle: {
              color: '#fff',
              width: 2,
            },
            leaves: {
              label: {
                position: 'bottom',
                align: 'center',
              },
            },
            expandAndCollapse: true,
            initialTreeDepth: -1,
            roam: true,
            animationDuration: 550,
            animationDurationUpdate: 750,
          },
        ],
      };
      this.chartDOM = this.$refs.chartRef as HTMLElement;
      this.myChart = echarts.init(this.chartDOM, 'dark');
      this.myChart.setOption(this.option);
      this.myChart.resize();
    });
  }

  private treeData() {
    // 递归转换为 ECharts tree 需要的数据结构，name/type/value 都展示，且 name 允许为 null
    const convert = (node: any) => {
      let label = node.type || '';
      if (node.name !== undefined && node.name !== null) label += `\n${node.name}`;
      if (node.value !== undefined && node.value !== null) label += `\n${node.value}`;
      return {
        name: label,
        children: Array.isArray(node.son) ? node.son.map(convert) : [],
      };
    };
    return convert(this.testData);
  }

  @Watch('testData', { immediate: false, deep: true })
  onTestDataChange() {
    if (this.myChart && this.option) {
      this.option.series[0].data = [this.treeData()];
      this.myChart.setOption(this.option, true);
    }
  }
}
</script>

<template>
  <div style="position: relative; width: 100%; display: flex; flex-direction: column; align-items: center;">
    <header class="lc-header" v-if="codeState === 'SUCCESS'">
      <span>Syntactic Tree</span>
      <el-button @click="fullscreen" size="small">全屏</el-button>
    </header>
    <div class="tree-container" id="main" ref="chartRef"></div>
    <div v-if="showModal" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <el-button class="modal-close" size="small" @click="closeModal">关闭</el-button>
          <div class="modal-echart" ref="modalChartRef"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.tree-container {
  width: 600px;
  height: 600px;
}

.modal-mask {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-wrapper {
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-container {
  background: #222;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.modal-close {
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 10;
  border: none;
  border-radius: 4px;
  padding: 6px 16px;
  cursor: pointer;
}
.modal-echart {
  flex: 1;
  width: 100%;
  height: 100%;
}

.lc-header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
