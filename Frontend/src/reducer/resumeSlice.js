import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
    name: "resume",
    initialState: {
        profilePicture: "",
        profileHeading: {
            profile_name: "",
            profile_about: "",
            stateWithNationilty: "",
            email: "",
            linkedin_link: "",
            instagram_link: "",
            phone_number: "",
            address: ""
        },
        educationData: [],
        workExperienceData: [],
        internshipData: [],
        projectData: [],
        skillData: [],
        honorsAndAwardsData: [],
        volunteerData: [],
        hobbiesData: [],
    },
    reducers: {
        addProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
        },
        addProfileHeading: (state, action) => {
            state.profileHeading = action.payload
        },
        addEducationData: (state, action) => {
            state.educationData = [...state.educationData, action.payload]
        },
        addWorkExperienceData: (state, action) => {
            state.educationData = [...state.educationData, action.payload]
        },
        addInternshipData: (state, action) => {
            state.internshipData = [...state.internshipData, action.payload]
        },
        addProjectData: (state, action) => {
            state.projectData = [...state.projectData, action.payload]
        },
        addSkillData: (state, action) => {
            state.skillData = [...state.skillData, action.payload]
        },
        addHonorsAndAwardsData: (state, action) => {
            state.honorsAndAwardsData = [...state.honorsAndAwardsData, action.payload]
        },
        addVolunteerData: (state, action) => {
            state.volunteerData = [...state.volunteerData, action.payload]
        },
        addHobbiesData: (state, action) => {
            state.hobbiesData = [...state.hobbiesData, action.payload]
        }

    }
});

export const { addProfilePicture, addProfileHeading, addEducationData, addWorkExperienceData, addInternshipData, addProjectData, addSkillData, addHonorsAndAwardsData, addVolunteerData, addHobbiesData } = resumeSlice.actions;
export default resumeSlice.reducer;