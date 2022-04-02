import $ from "jquery";

export default {
    methods: {
        toggle(div, classIn, classOut) {
            $(div).addClass(classIn);
            $(div).removeClass(classOut);
        }
    }
}