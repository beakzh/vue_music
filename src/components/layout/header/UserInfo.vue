<template>
	<div class="userinfo">
		<el-avatar size="small" />
		<span class="login" @click="clickLogin">点击登录</span>
		<el-dialog v-model="showLogin" title="登录" width="25%">
			<el-form>
				<el-form-item>
					<el-input placeholder="手机号码" :prefix-icon="Lock" />
				</el-form-item>
				<el-form-item>
					<el-input placeholder="登录密码" :prefix-icon="Phone" />
				</el-form-item>
			</el-form>
			<el-button type="primary" @click="showLogin = false">登录</el-button>
		</el-dialog>
	</div>
</template>

<script setup>
import { Lock, Phone } from '@icon-park/vue-next'
import { ref } from 'vue'
let showLogin = ref(false)
let clickLogin = () => (showLogin.value = true)
</script>

<style scoped>
.userinfo {
	display: flex;
	align-items: center;
	gap: 0 0.2rem;
}
.login {
	cursor: pointer;
	font-size: 12px;
}
.login:hover {
	color: #2dd4bf;
}
.el-button {
	width: 100%;
	background-color: rgb(5 150 105);
}
</style>