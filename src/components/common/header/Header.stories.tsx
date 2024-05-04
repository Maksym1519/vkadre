import Header from "./Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store/store"
import "@vars/colors.scss";
import "@vars/variables.scss";
import "@mixins/mediaBreakpoints.scss";
import "../../../styles/global.scss";
import { Args } from "@storybook/react";


export default {
    title: "Header",
    component: Header,
    decorators: [
          (Story: any) => (
            <Provider store={store}>
                <BrowserRouter>
                    <Story />
                </BrowserRouter>
            </Provider>
        ),
    ],
} 

const Template: React.FC<Args> = (args) => <Header {...args}/>

export const MyHeader =  Template.bind({})

MyHeader.args = {
    
}