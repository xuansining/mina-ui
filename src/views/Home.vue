<template>
  <div class="home">
    <div class="topnavAndBanner">
      <top-nav></top-nav>
      <div class="banner">
        <h1 class="banner-title">mina-UI</h1>
        <h2 class="banner-subtitle">
          一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库
        </h2>
        <p class="actions">
          <a href="#">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了Vue3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-lights"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  components: {
    TopNav: TopNav,
  },
};
</script>
 
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color: #007974;

$main: #d6d0d7;
$btn_blue: black;
$font: #050505;
.home {
  background: #ede8e4;
  min-height: 100vh;
}
.topnavAndBanner {
  background-color: $main;
  // background: linear-gradient(
  //   145deg,
  //   rgba(227, 255, 253, 1) 0%,
  //   rgba(183, 233, 230, 1) 100%
  // );
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: $font;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .banner-title {
    font-size: 35px;
  }

  > .actions {
    padding: 8px 0;
    a {
      background: $btn_blue;
      color: white;
      margin: 0 8px;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
@media (max-width: 800px) {
  .banner .banner-subtitle {
    text-align: center;
    font-size: 18px;
  }
}
.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>