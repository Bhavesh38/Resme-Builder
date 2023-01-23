import React from 'react';
import Input from '../InputForm/Input';
import { useSelector } from 'react-redux';
import html2pdf from "html2pdf.js"


import "./Create.css"
const Create = () => {
    const { profilePicture, profileHeading, educationData, workExperienceData, internshipData, projectData, skillData, honorsAndAwardsData, volunteerData, hobbiesData } = useSelector((state) => state.resumeSlice);



    const downloadYourResume = () => {
        const temp = document.querySelector('#resume');
        var opt = {
            margin: 0,
            filename: 'myfile.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        // html2pdf().from(element).set(opt).save();
        html2pdf().from(temp).set(opt).save();
    }
    return (
        <div className='create'>
            <div className='preview' id="resume">
                <div className='preview_heading'>
                    <img src={profilePicture || "https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"} alt="profile.png" />
                    <div className='preview_heading_content'>
                        <h3>{profileHeading.profile_name || "Your Name"}</h3>
                        <p>{profileHeading.profile_about || "Write about yurself"}</p>
                        <div className='preview_heading_content_contact_details'>
                            <span>Email : {profileHeading.email || "Email"}</span>
                            <span>Phone : {profileHeading.phone_number || "+910000000000"}</span>
                            <span>Add : {profileHeading.address || "Address"}</span>
                        </div>
                    </div>
                </div>
                <div className='previewContent'>
                    <div className='previewContent_left'>
                        <div className='education'>
                            <h5>{educationData.length ? "Education" : "Education"}</h5>
                            {
                                educationData.map((data) => (
                                    <div className='education_content'>
                                        {educationData.length ? <hr className='education_content_divider' /> : null}
                                        <div className='education_content_top'>
                                            <span className='education_content_top_degree'>{data.degree || "Betech in CSE"}</span>
                                            <span>{data.starting_education_date} {data.ending_education_date}</span>
                                        </div>
                                        <span className='education_content_cl_name'>{data.college_name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='education'>
                            <h5>{workExperienceData.length ? "Work Experience" : "Work Experience"}</h5>
                            {
                                workExperienceData.map(data => (
                                    <div className='education_content'>
                                        {data.length ? <hr className='education_content_divider' /> : null}
                                        <div className='education_content_top work_experience_content_top'>
                                            <span className='education_content_top_degree'><strong>Position:-</strong> {data.work_position}</span>
                                            <span>{data.starting_work_date} - {data.ending_work_date}</span>
                                        </div>
                                        <span className='education_content_cl_name'>{data.work_company_name}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='education'>
                            {internshipData.length ? <h5>Internships</h5> : <h5>Internships</h5>}
                            {
                                internshipData.map(data => (
                                    <div className='education_content'>
                                        <hr className='education_content_divider' />
                                        <div className='education_content_top work_experience_content_top'>
                                            <span className='education_content_top_degree'><strong>Position:-</strong> {data.internship_position}</span>
                                            <span>{data.starting_internship_date}- {data.ending_internship_date}</span>
                                        </div>
                                        <span className='education_content_cl_name'>{data.internship_company_name}</span>
                                        {/* <span className='education_content_location'><LocationOnIcon fontSize='sm' />- Kolkata</span> */}
                                    </div>
                                ))
                            }
                        </div>
                        <div className='projects'>
                            <h5>projects</h5>
                            {
                                projectData.map(data => (
                                    <div className='projects_content'>
                                        <hr />
                                        <span className='project_name'>
                                            <strong className='project_name_project'>
                                                {data.project_name}
                                            </strong>
                                            :-{data.project_about}
                                        </span>
                                        <span className='project_name'>
                                            <strong>
                                                Features
                                            </strong>
                                            :-{data.project_features}
                                        </span>
                                        <span className='project_name'>
                                            <strong>
                                                Stack used
                                            </strong>
                                            :-{data.project_technology}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='previewContent_right'>
                        <span className='nationality'>
                            <strong>Nationality:-
                            </strong>
                            {profileHeading.stateWithNationilty || "India"}
                        </span>
                        <span className='social_media_link'>
                            <strong>
                                Linkedin:-
                            </strong>
                            {profileHeading.linkedin_link}
                        </span>
                        <span className='social_media_link'><strong>Facebook:-</strong>{profileHeading.instagram_link}</span>
                        <hr />
                        <div className='skills'>
                            <h5>Skills</h5>
                            {
                                skillData.map(data => (
                                    <div>
                                        <strong>{data.skill_name} :- </strong>
                                        <span>{data.skill_rating}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <hr />
                        <div className='honors'>
                            <h5>Honors and Awards</h5>
                            <ul>
                                {
                                    honorsAndAwardsData.map(data => (
                                        <li>{data.honor_name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className='honors'>
                            <h5>Volunteer Experience</h5>
                            <ul>
                                {
                                    volunteerData.map(data => (
                                        <li>{data.volunteer_name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className='honors'>
                            <h5>Hobbies</h5>
                            <ul>
                                {
                                    hobbiesData.map(data => (
                                        <li>data.hobbie_name</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <hr />
                    </div>

                </div>

            </div>
            <div className='create_resume'>
                <Input />
                <button className='download_button' type="primary">Save</button>
                <button className='download_button' onClick={downloadYourResume} type="primary">Download Your Resume</button>
            </div>
        </div>
    )
}

export default Create
