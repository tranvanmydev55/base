<template>
<div class="hold-transition login-page">
    <div class="login-box">
        <div class="login-logo">
            <b>Admin</b>unic
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <form action="#">
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" v-model="information.email" placeholder="Email">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" v-model="information.password" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <!-- /.col -->
                        <div class="col-4">
                            <button class="btn btn-primary btn-block" @click="redirectToAdmin()">Sign In</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <p class="mb-1">
                    <a href="#">I forgot my password</a>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Login',

    data: function () {
        return {
            information: {
                'email': 'tranvanmydev@gmail.com',
                'password': '123456'
            }
        };
    },

    created() {
        /**
         * Do something
         */
    },
    methods: {
        redirectToAdmin() {
            window.location.href = '/';
        }
    }
};
</script>
