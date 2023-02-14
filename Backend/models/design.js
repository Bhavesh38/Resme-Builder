import mongoose from "mongoose";
const designSchema = new mongoose.Schema({
    profilePicture: {
        type: String
    },
    profile_name: {
        type: String,
        required: true
    },
    profile_about: {
        type: String,
        required: true
    },
    stateWithNationilty: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    linkedin_link: {
        type: String,

    },
    instagram_link: {
        type: String
    },
    phone_number: {
        type: String
    },
    address: {
        type: String
    },
    educationData: {
        type: Array,
        default: []
    },
    educationData: {
        type: Array,
        default: []
    },
    workExperienceData: {
        type: Array,
        default: []
    },
    internshipData: {
        type: Array,
        default: []
    },
    projectData: {
        type: Array,
        default: []
    },
    skillData: {
        type: Array,
        default: []
    },
    honorsAndAwardsData: {
        type: Array,
        default: []
    },
    volunteerData: {
        type: Array,
        default: []
    },
    hobbiesData: {
        type: Array,
        default: []
    }
});

const Design = mongoose.model("Design", designSchema);
export default Design;