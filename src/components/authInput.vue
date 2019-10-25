<template>
    <input class="input" :class="{error:!isOk}" :type="type" :placeholder="placeholder" @input="dataChange"  @blur="showTips">
</template>

<script>
export default {
    props:['type','placeholder','rule','err_message'],
    data(){
        return {
            isOk:true
        }
    },
    methods:{
        dataChange($event){
            if(!$event.target.value){
                this.isOk=true
            }else{
                // console.log($event.target.value);
                var regex=new RegExp(this.rule);
                this.isOk= regex.test($event.target.value);
                // console.log(this.isOk);
            }
            // if(!this.isOk){
            //     // 输入错误提示
            //     console.log(this.err_message)
            // }
            this.$emit('input', $event.target.value)
        },
        showTips(){
            if(!this.isOk){
                // 弹出提示框
                alert(this.err_message);
                // console.log(this.err_message)
            }
        }
    }
}
</script>

<style>
    .input {
        margin-bottom: 5.556vw;
        width: 100%;
        height: 10.556vw;
        padding: 5.556vw;
        box-sizing: border-box;
        background: #fff;
        border: none;
        border-bottom: 1px #666 solid;
        outline: none;
    }
    .error{
        border-color: red;
    }
</style>