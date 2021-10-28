import { createApp, h } from 'vue'
import Dialog from './Dialog.vue'
export const openDialog = (options) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const { title, content, onOk, onCancel, onClickOverlayClose } = options

    const close = () => {

        app.unmount();
        div.remove();
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                "onUpdate:visible": (newVisible) => {


                    if (!newVisible) {
                        close()
                    }
                    //监听visible的变化
                },
                onOk: onOk,
                onCancel: onCancel,
                onClickOverlayClose

            }, {
                title,
                content
            }

            )
        }
    })
    app.mount(div)

}