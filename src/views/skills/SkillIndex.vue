<script setup>
import { useSkills } from "../../composables/skills";
import { onMounted } from "vue";

const { skills, getSkills, destroySkill } = useSkills();

onMounted(() => getSkills());

</script>

<template>
    <div class="container mx-auto px-6 mt-4">
        <!-- Wrapper untuk col-md-8 -->
        <div class="w-full md:w-2/3 mx-auto">
            <div class="flex justify-end mb-4 items-center">
                <RouterLink :to="{ name: 'SkillCreate' }" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Skill
                </RouterLink>
            </div>
            <div class="relative overflow-x-auto rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black border">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">No.</th>
                            <th scope="col" class="px-6 py-3">Name</th>
                            <th scope="col" class="px-6 py-3">Slug</th>
                            <th scope="col" class="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(skill, index) in skills" :key="skill.id" class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                                {{ index + 1 }}.
                            </th>
                            <td class="px-6 py-4">{{ skill.name }}</td>
                            <td class="px-6 py-4">{{ skill.slug }}</td>
                            <td class="px-6 py-4">
                                <RouterLink :to="{ name: 'SkillEdit', params: { id: skill.id } }" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><i class="fa-solid fa-pen-to-square"></i> Edit</RouterLink>
                                <button @click="destroySkill(skill.id)" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"><i class="fa-solid fa-trash-can"></i> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
