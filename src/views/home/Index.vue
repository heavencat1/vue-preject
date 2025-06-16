<template>
  <DefaultLayout></DefaultLayout>
</template>




<script>
export default {
    name: 'Index',
    components: {
        DefaultLayout: (d) => import("@/layouts/DefaultLayout.vue")
    }
}
</script>


