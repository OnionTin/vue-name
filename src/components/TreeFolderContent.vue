<template>
  <li>
    <span @click="toggle">
        {{ menus.menuName }}
    </span>
    <ul v-if="isFolder" v-show="open">
      <TreeFolder
        v-for="(item, index) in menus.childTree"
        :menus="item"
        :key="index"
      ></TreeFolder>
    </ul>
  </li>
</template>

<script type="text/javascript">
  import TreeFolder from "@/components/TreeFolder";
  export default {
    /*****
     *
     *  组件递归必要条件，name属性:
     *  1.因为TreeFolder和TreeFolderContent组件是互相依赖的
     *  2.为了在beforeCreated阶段,将组件的依赖关系切离开,即需要的时候再渲染,
     *  3.所以要将name属性重新指定到递归关系开始的组件,即TreeFolder
     *
     * ******/
    name: 'TreeFolder',
    components:{
      TreeFolder
    },
    props: ['menus'],
    data() {
      return {
        // 控制子列表的显示隐藏
        open: false
      }
    },
    computed: {
      // 是否还有子列表需要渲染，作为v-if的判断条件
      isFolder() {
        return this.menus.childTree && this.menus.childTree.length
      }
    },
    methods: {
      // 切换列表显示隐藏的方法
      toggle() {
        if(this.isFolder) {
          this.open = !this.open
        }
      },
    }
  }
</script>
<style>

</style>
