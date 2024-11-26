<script setup>
import { useSkills } from '@/composables/skills';
import { onMounted } from 'vue';

const { skill, getSkill, errors, updateSkill } = useSkills();

const props = defineProps({
    id: {
        required: true,
        type: String
    }
});

onMounted(() => getSkill(props.id));
</script>

<template>
    <div class="container">
        <div class="flex md:w-2/3 mx-auto justify-center">
            <form 
                class="max-w-sm w-full shadow-md rounded px-8 pt-6 pb-8 mb-4"
                @submit.prevent="updateSkill($route.params.id)"
            >
                <div class="mb-5">
                    <label 
                        for="text" 
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >
                        Isi Nama
                    </label>
                    <input 
                        type="text" 
                        id="text"
                        v-model="skill.name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Type something"
                    />
                    <div v-if="errors.name" class="mt-2">
                        <span class="text-sm text-red-500">{{ errors.name[0] }}</span>
                    </div>
                </div>
                <button 
                    type="submit" 
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
</template>