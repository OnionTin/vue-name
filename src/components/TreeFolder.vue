<template>
  <div>
    <TreeFolderContent
      v-for="(item, index) in list"
      :menus="item"
      :key="index"
    >
    </TreeFolderContent>
  </div>
</template>

<script type="text/javascript">
  import TreeFolderContent from "@/components/TreeFolderContent";
  export default{
    name:"TreeFolder",
    components: {
      TreeFolderContent
    },
    props:['list']
  }
</script>


<style scoped>

</style>
