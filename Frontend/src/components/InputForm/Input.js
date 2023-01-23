import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FileBase from "react-file-base64";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addProfileHeading, addProfilePicture, addEducationData, addWorkExperienceData, addInternshipData, addProjectData, addSkillData, addHonorsAndAwardsData, addVolunteerData, addHobbiesData } from '../../reducer/resumeSlice';



import "./Input.css"


const Input = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [profilePicture, setProfilePicture] = useState("");
    const [profileHeading, setProfileHeading] = useState({
        profile_name: "",
        profile_about: "",
        stateWithNationilty: "",
        email: "",
        linkedin_link: "",
        instagram_link: "",
        phone_number: "",
        address: ""
    });
    const [educationData, setEducationData] = useState({
        degree: "",
        starting_education_date: "",
        ending_education_date: "",
        current_education_ending_date: false,
        college_name: ""
    });
    const [workExperienceData, setWorkExperienceData] = useState({
        work_position: "",
        starting_work_date: "",
        ending_work_date: "",
        current_ending_work_date: false,
        work_company_name: "",

    });
    const [internshipData, setInternshipData] = useState({
        internship_position: "",
        starting_internship_date: "",
        ending_internship_date: "",
        current_ending_internship_date: false,
        internship_company_name: "",
    });

    const [projectData, setProjectData] = useState({
        project_name: "",
        project_about: "",
        project_features: "",
        project_technology: ""
    });
    const [skillData, setSkillData] = useState({
        skill_name: "",
        skill_rating: "",
    });
    const [honorsAndAwardsData, setHonorsAndAwardsData] = useState({
        honor_name: ""
    });
    const [volunteerData, setVolunteerData] = useState({
        volunteer_name: ""
    });
    const [hobbiesData, setHobbiesData] = useState({
        hobbie_name: ""
    });
    const handleProfileHeadingDataChange = (e) => {
        setProfileHeading({
            ...profileHeading,
            [e.target.name]: [e.target.value]
        })
    }
    const sendProfilePicture = (e) => {
        e.preventDefault();
        dispatch(addProfilePicture(profilePicture));
        setProfilePicture("");
    }
    const sendProfileHeadingData = (e) => {
        e.preventDefault();
        dispatch(addProfileHeading(profileHeading));
        setProfileHeading({
            profile_name: "",
            profile_about: "",
            stateWithNationilty: "",
            email: "",
            linkedin_link: "",
            instagram_link: "",
            phone_number: "",
            address: ""
        });
    }


    const handleEducationData = (e) => {
        setEducationData({
            ...educationData,
            [e.target.name]: [e.target.value]
        })
    }
    const sendEducationData = (e) => {
        e.preventDefault();
        dispatch(addEducationData(educationData));
        setEducationData({
            degree: "",
            starting_education_date: "",
            ending_education_date: "",
            current_education_ending_date: false,
            college_name: ""
        })
    }
    const handleWorkExperienceData = (e) => {
        setWorkExperienceData({
            ...workExperienceData,
            [e.target.name]: [e.target.value]
        })
    }
    const sendWorkExperienceData = (e) => {
        e.preventDefault();
        dispatch(addWorkExperienceData(workExperienceData));
        setWorkExperienceData({
            work_position: "",
            starting_work_date: "",
            ending_work_date: "",
            current_ending_work_date: false,
            work_company_name: "",
        });

    };

    const handleInternshipData = (e) => {
        setInternshipData({
            ...internshipData,
            [e.target.name]: [e.target.value]
        })
    }

    const sendInternshipData = (e) => {
        e.preventDefault();
        dispatch(addInternshipData(internshipData));
        setInternshipData({
            project_name: "",
            starting_internship_date: "",
            ending_internship_date: "",
            current_ending_internship_date: false,
            internship_company_name: "",
        })
    };

    const handleProjectData = (e) => {
        setProjectData({
            ...projectData,
            [e.target.name]: [e.target.value]
        });
    }

    const sendProjectData = (e) => {
        e.preventDefault();
        dispatch(addProjectData(projectData));
        setProjectData({
            project_name: "",
            project_about: "",
            project_features: "",
            project_technology: ""
        })
    }

    const handleSkillData = (e) => {
        setSkillData({
            ...skillData,
            [e.target.name]: [e.target.value]
        })
    }

    const sendSkillData = (e) => {
        e.preventDefault();
        dispatch(addSkillData(skillData));
        setSkillData({
            skill_name: "",
            skill_rating: "",
        });
    };

    const handleHonorAndAwardData = (e) => {
        setHonorsAndAwardsData({
            ...honorsAndAwardsData,
            [e.target.name]: [e.target.value]
        });
    };

    const sendHonorAndAwardData = (e) => {
        e.preventDefault();
        dispatch(addHonorsAndAwardsData(honorsAndAwardsData));
        setHonorsAndAwardsData({
            honor_name: ""
        });
    };

    const hanldeVolunteerData = (e) => {
        setVolunteerData({
            ...volunteerData,
            [e.target.name]: [e.target.value]
        })
    }

    const sendVolunteerData = (e) => {
        e.preventDefault();
        dispatch(addVolunteerData(volunteerData));
        setVolunteerData({
            volunteer_name: ""
        });
    };
    const handleHobbiesData = (e) => {
        setHobbiesData({
            ...hobbiesData,
            [e.target.name]: [e.target.value]
        })
    };
    const sendHobbiesData = (e) => {
        e.preventDefault();
        dispatch(addHobbiesData(hobbiesData));
        setHobbiesData({
            hobbie_name: ""
        })
    }

    const checkUser = () => {
        if (!user) {
            navigate("/login", { replace: true })
        }
    }

    useEffect(() => {

        checkUser();

    }, [user]);

    return (
        <div className='inputForm'>
            <h2>Start Making Your Resume</h2>
            <form className='profile_picture_form' onSubmit={sendProfilePicture}>
                {/* <label for="profile_input">
                    <div>
                        <AccountCircleIcon className='profile_input_icon' fontSize='large' />
                        <span>Select Profile</span>
                    </div>
                </label> */}
                <span>Select Profile Pic</span>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setProfilePicture(base64)}
                />
                {/* <input type="file"  required /> */}
                <button type="submit">Add Profile</button>
            </form>
            <form className='profile_name_and_details' onSubmit={sendProfileHeadingData}>
                <h3>Add Profile Heading</h3>
                <hr />
                <input required type="text" name="profile_name" placeholder='Name' value={profileHeading.profile_name} onChange={handleProfileHeadingDataChange} />
                <input type="text" name="profile_about" placeholder='Tell about yourself (Max. 2 line)' value={profileHeading.profile_about} onChange={handleProfileHeadingDataChange} />
                <input type="text" name="stateWithNationilty" placeholder='State(Nationality)' value={profileHeading.stateWithNationilty} onChange={handleProfileHeadingDataChange} />
                <input type="email" name="email" placeholder='Email' value={profileHeading.email} onChange={handleProfileHeadingDataChange} />
                <input type="text" name="linkedin_link" placeholder='Linkedin Profile Link' value={profileHeading.linkedin_link} onChange={handleProfileHeadingDataChange} />
                <input type="text" name="instagram_link" placeholder='Instagram Profile Link' value={profileHeading.instagram_link} onChange={handleProfileHeadingDataChange} />
                <input type="tel" name="phone_number" placeholder='Phone Number' value={profileHeading.phone_number} onChange={handleProfileHeadingDataChange} />
                <input type="type" name="address" placeholder='Current Address with pin (max 40 char)' value={profileHeading.address} onChange={handleProfileHeadingDataChange} />
                <button type="submit">Add</button>
            </form>
            <form className='education_details' onSubmit={sendEducationData}>
                <h3>Add Your Education</h3>
                <hr />
                <input required type="text" name="degree" placeholder='Type of Degree (eg. Betech in CSE)' value={educationData.degree} onChange={handleEducationData} />
                <div>
                    <label for="starting_education_date">Select Starting Date</label>
                    <input type="date" id="starting_education_date" name="starting_education_date" value={educationData.starting_education_date} onChange={handleEducationData} />
                </div>
                <div>
                    <label for="ending_education_date">Select Ending Date</label>
                    <input type="date" id="ending_education_date" name="ending_education_date" value={educationData.ending_education_date} onChange={handleEducationData} />
                    <label for="current_education_ending_date">Till Current</label>
                    <input type="checkbox" id="current_education_ending_date" name="current_education_ending_date" value={educationData.current_education_ending_date} onChange={handleEducationData} />
                </div>

                <input type="text" name="college_name" placeholder='School/College Name' value={educationData.college_name} onChange={handleEducationData} />
                <button type="submit">Add</button>
                <span>
                    *Note :- Add multiple time to add more than one Education. <Link to="/docs">
                        Check Docs.
                    </Link>
                </span>
            </form>
            <form className='education_details' onSubmit={sendWorkExperienceData}>
                <h3>Add Your Work Experience</h3>
                <hr />
                <input required type="text" name="work_position" placeholder='Position (eg. Frontend developer)' value={workExperienceData.work_position} onChange={handleWorkExperienceData} />
                <div>
                    <label for="starting_work_date">Select Starting Date</label>
                    <input type="date" id="starting_work_date" name="starting_work_date" value={workExperienceData.starting_work_date} onChange={handleWorkExperienceData} />
                </div>
                <div>
                    <label for="ending_work_date">Select Ending Date</label>
                    <input type="date" id="ending_work_date" name="ending_work_date" value={workExperienceData.ending_work_date} onChange={handleWorkExperienceData} />
                    <label for="current_ending_work_date">Till Current</label>
                    <input type="checkbox" id="current_ending_work_date" name="current_ending_work_date" value={workExperienceData.current_ending_work_date} onChange={handleWorkExperienceData} />
                </div>
                <input type="text" name="work_company_name" placeholder='Company/Organization Name' value={workExperienceData.work_company_name} onChange={handleWorkExperienceData} />
                <button type="submit">Add</button>
                <span>*Note :- Add multiple time to add more than one Work Experience. <Link to="/docs">Check Docs.</Link></span>
            </form>
            <form className='education_details' onSubmit={sendInternshipData}>
                <h3>Add Internship</h3>
                <hr />
                <input required type="text" name="internship_position" placeholder='Position (eg. Frontend developer)' onChange={handleInternshipData} value={internshipData.internship_position} />
                <div>
                    <label for="starting_internship_date">Select Starting Date</label>
                    <input type="date" id="starting_internship_date" name="starting_internship_date" onChange={handleInternshipData} value={internshipData.starting_internship_date} />
                </div>
                <div>
                    <label for="ending_internship_date">Select Ending Date</label>
                    <input type="date" id="ending_internship_date" name="ending_internship_date" onChange={handleInternshipData} value={internshipData.ending_internship_date} />
                    <label for="current_ending_internship_date">Till Current</label>
                    <input type="checkbox" id="current_ending_internship_date" name="current_ending_internship_date" onChange={handleInternshipData} value={internshipData.current_ending_internship_date} />
                </div>
                <input type="text" name="internship_company_name" placeholder='Company/Organization Name' onChange={handleInternshipData} value={internshipData.internship_company_name} />
                <button type="submit">Add</button>
                <span>*Note :- Add multiple time to add more than one Internship. <Link to="/docs">Check Docs.</Link></span>
            </form>
            <form className='education_details' onSubmit={sendProjectData}>
                <h3>Add Projects</h3>
                <hr />
                <input required type="text" placeholder='Project Name (eg. Resume Builder)' name="project_name" onChange={handleProjectData} value={projectData.project_name} />
                <input type="text" placeholder='About Project (eg. check docs)' name="project_about" onChange={handleProjectData} value={projectData.project_about} />
                <input type="text" placeholder='Feautures of Project (commas seperated) (eg. AI generated text)' name="project_features" onChange={handleProjectData} value={projectData.project_features} />
                <input type="text" placeholder='Technology used in Project (commas seperated) (eg. React,Node,firebase)' name="project_technology" onChange={handleProjectData} value={projectData.project_technology} />
                <button>Add</button>
                <span>*Note :- Add multiple time to add more than one Project. <Link to="/docs">Check Docs.</Link></span>
            </form>
            <form className='education_details' onSubmit={sendSkillData}>
                <h3>Add Your Skills</h3>
                <hr />
                <input required type="text" placeholder='Skill (eg. Java)' name="skill_name" value={skillData.skill_name} onChange={handleSkillData} />
                <input type="tel" placeholder='Rate Yourself out of 5 (eg. 4.5)' name="skill_rating" value={skillData.skill_rating} onChange={handleSkillData} />
                <button type="submit">Add</button>
                <span>*Note :- Add multiple time to add more than one Skill. <Link to="/docs">Check Docs.</Link></span>
            </form>
            <form className='education_details' onSubmit={sendHonorAndAwardData}>
                <h3>Honors and Awards</h3>
                <hr />
                <input required type="text" placeholder='Name of Honor/Award (eg. 4⭐ on Codeshef)' name="honor_name" value={honorsAndAwardsData.honor_name} onChange={handleHonorAndAwardData} />
                <button type="submit">Add</button>
                <span>*Note :- Add multiple time to add more than one Honor/Award. <Link to="/docs">Check Docs.</Link></span>
            </form>
            <form className='education_details' onSubmit={sendVolunteerData}>
                <h3>Volunteer Experience</h3>
                <hr />
                <input required type="text" placeholder='Name of Volunteer (eg. GDSC lead)' name="volunteer_name" value={volunteerData.volunteer_name} onChange={hanldeVolunteerData} />
                <button type='submit'>Add</button>
                <span>*Note :- Add multiple time to add more than one Volunteer. <Link to="/docs">Check Docs.</Link></span>
            </form>
            <form className='education_details' onSubmit={sendHobbiesData}>
                <h3>Hobbies</h3>
                <hr />
                <input required type="text" placeholder='Name of Hobbie (eg. Football)' name="hobbie_name" value={hobbiesData.hobbie_name} onChange={handleHobbiesData} />
                <button type='submit'>Add</button>
                <span>*Note :- Add multiple time to add more than one Hobbies. <Link to="/docs">Check Docs.</Link></span>
            </form>
        </div>

    )
}

export default Input
