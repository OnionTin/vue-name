<!--菜单页面的首页:(1)-->
<template>
    <TreeFolder :list="list"></TreeFolder>
</template>

<script>
  import TreeFolder from "@/components/TreeFolder";
  export default {
    name: "slidFir",
    components: {TreeFolder},
    data(){
      return{
        list:[
          {
            id: 1,
            menuName: "一级菜单1",
            childTree: [
              {
                menuName: "二级菜单1",
                childTree: [
                  {
                    menuName: "三级菜单1",
                    childTree: [
                      {
                        menuName: "四级菜单"
                      }
                    ]
                  }
                ]
              },
              {
                menuName: "二级菜单2"
              }
          ]
          },
          {
            id: "2",
            menuName: "一级菜单2",
            childTree: [
                  {
                      menuName: "二级菜单1",
                      childTree: [
                          {
                              menuName: "三级菜单1",
                              childTree: [
                                  {
                                      menuName: "四级菜单"
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      menuName: "二级菜单2"
                  }
              ]
          },
          {
            id: "3",
            menuName: "一级菜单3"
          }
        ]
      }
    }
  }
</script>
<style>
  ul li {
      list-style:none;
  }
</style>
