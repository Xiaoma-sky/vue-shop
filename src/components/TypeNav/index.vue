<template>
  <div>
    <div class="type-nav">
      <div class="container">
          <div @mouseleave="mouseLeave">
          <h2 class="all">全部商品分类</h2>
          <div class="sort">
            <div class="all-sort-list2" @click="toSearch">
              <div
                class="item"
                v-for="(item, index) in categroyList"
                :key="item.categoryId"
                @mouseenter="changeIndex(index)"
                :class="{ cur: currentIndex == index }"
              >
                <h3>
                  <a
                  :data-categoryName="item.categoryName"
                  :data-category1Id="item.categoryId"
                   >
                   {{item.categoryName }}</a>
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div
                    class="subitem"
                    v-for="item1 in item.categoryChild"
                    :key="item1.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="item1.categoryName"
                  :data-category2Id="item1.categoryId">{{ item1.categoryName }}</a>
                      </dt>
                      <dd>
                        <em
                          v-for="item2 in item1.categoryChild"
                          :key="item2.categoryId"
                        >
                          <a :data-categoryName="item2.categoryName"
                            :data-category3Id="item2.categoryId">{{ item2.categoryName }}</a>
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  mounted() {
    this.$store.dispatch("getCategroy");
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
    },
    mouseLeave(){
        this.currentIndex =-1
    },
    // 点击路由跳转
    toSearch(e){
        const {categoryname,category1id,category2id,category3id }= e.target.dataset
        let location = {name:'search'}
        let query = {categoryname:categoryname}
       if(categoryname) {
           if(category1id){
               query.category1Id = category1id
           }else if(category2id){
               query.category2Id = category2id
           }else {
               query.category3Id = category3id
           }
       }
       location.query = query
       this.$router.push(location)
    }
  },
  computed: {
    ...mapState({
      categroyList: (state) => {
        return state.home.categroyList.data;
      },
    }),
  },
};
</script>

<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //     .item-list {
          //         display: block;
          //     }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
  }
}
</style>
