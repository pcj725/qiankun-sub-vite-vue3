import { createApp } from "vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";

let app: any = null;
function render(props: any = {}) {
  const { container } = props;
  app = createApp(App);

  const root = container
    ? container.querySelector("#app")
    : document.getElementById("app");
  app.mount(root);
}

renderWithQiankun({
  mount(props) {
    // console.log("mount");
    render(props);
  },
  bootstrap() {
    // console.log("bootstrap");
  },
  unmount() {
    // console.log("unmount");
    app?.unmount();
  },
  update(props: any) {
    // console.log("update props", props);
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}
