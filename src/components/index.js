import {element} from 'deku';
let MyTextArea = {
    render: ({props, state}) => {
        return <div>Show text area</div>
    },
    beforeRender: () => {
        console.log('Im before rendering');
    },
    afterRender: () =>{
        console.log('Im after rendering.');
    }
}

export default MyTextArea