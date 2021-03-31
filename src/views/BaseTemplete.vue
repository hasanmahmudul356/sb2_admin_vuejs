<template>
    <div>
        <div id="wrapper">
            <SideMenu></SideMenu>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopNavBar></TopNavBar>
                    <div class="container-fluid">
                        <slot></slot>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>
    </div>
</template>

<script>
    import TopNavBar from "./layouts/TopNavBar";
    import SideMenu from "./layouts/SideMenu";
    import DashboardComponent from "./pages/DashboardComponent";
    import Footer from "./layouts/Footer";

    export default {
        name: "BaseTemplete",
        components: {Footer, DashboardComponent, SideMenu, TopNavBar}
    }
</script>

<style scoped>

</style>