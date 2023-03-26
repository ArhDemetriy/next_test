import { ComponentMeta, ComponentStory } from '@storybook/react';
import {Catalog} from '../index';

const componentMeta: ComponentMeta<typeof Catalog> = {
    title: 'Basic Components/Catalog',
    component: Catalog,
    argTypes: {
    },
    decorators: [
        Story => (
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    backgroundColor: 'white',
                }}>
                <Story />
            </div>
        ),
    ],
};
export default componentMeta;

const Template: ComponentStory<typeof Catalog> = a => <Catalog {...a} />;

export const Catalog_FirstTest = Template.bind({});
Catalog_FirstTest.args = {
};