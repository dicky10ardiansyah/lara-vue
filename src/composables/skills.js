import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

axios.defaults.baseURL = "http://localhost:8000/api/v1/";

export function useSkills() {
    const skills = ref([]);
    const skill = ref({});
    const errors = ref([]);
    const router = useRouter();
    
    const getSkills = async () => {
        const response = await axios.get("skills");
        skills.value = response.data.data;
    };
        
    const getSkill = async (id) => {
        const response = await axios.get(`skills/${id}`);
        skill.value = response.data.data;
    };

    const storeSkill = async (data) => {
        try {
            await axios.post(`skills`, data);
            await router.push({ name: "SkillIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };
    
    const updateSkill = async (id) => {
        try {
            await axios.put(`skills/${id}`, skill.value);
            await router.push({ name: "SkillIndex" });
        } catch (error) {
            if (error.response.status === 422) {
                errors.value = error.response.data.errors;
            }
        }
    };

    const destroySkill = async (id) => {
        if (!window.confirm("Are you sure you want to delete this skill?")) return;
    
        try {
            await axios.delete(`skills/${id}`);
            // After deletion, refresh the skill list
            await getSkills(); // this will reload the skills list
        } catch (error) {
            console.error("Failed to delete skill:", error);
        }
    };    
    
    return {
        skills,
        skill,
        errors,
        getSkills,
        getSkill,
        storeSkill,
        updateSkill,
        destroySkill
    };
}