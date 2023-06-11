import React, { useRef, useState } from "react";

const JobsDetails = () => {
  
  return (
    <div className="p-8 space-y-1">
      <div>
        <span className="text-2xl font-semibold">OBSS New Graduates 2023</span>
      </div>
      <div className="flex text-sm space-x-2 ">
        <div>
          <span>OBSS</span>
        </div>
        <div>
          <span className="before:content-['🟠']">
            İstanbul, Turkiye(Hybrid)
          </span>
        </div>
        <div>
          <span className="text-xs text-gray-400">1 gün önce</span>
        </div>
      </div>
      <div className="pt-6 text-gray-600">
        <ul className="space-y-3 ">
          <li>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M4 2v20h16V2zm14 18h-4v-2h-4v2H6V4h12zm-7-8H8v-2h3zm0 4H8v-2h3zm5-4h-3v-2h3zm-5-4H8V6h3zm5 0h-3V6h3zm0 8h-3v-2h3z"></path>
              </svg>
              <span>Tam Zamanlı</span>
              <span  className="before:content-['·']"> Başlangıç Seviye</span>
            </div>
          </li>
          <li>
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                class="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <span  >1-5 Çalışan</span>
              <span className="before:content-['·']"> Telekomünikasyon</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="pt-5">
      <span className="text-xl font-semibold">İş ilanı hakkında</span> 
      <p className="pt-5 text-sm">Founded in 1987, Huawei is a leading global provider of information and communications technology (ICT) infrastructure and smart devices. We have more than 194,000 employees, and we operate in more than 170 countries and regions, serving more than three billion people around the world. Our vision and mission are to bring digital to every person, home, and organization for a fully connected, intelligent world.


Job Description:


We are seeking a highly motivated Software Engineer to join our team. As a Software Engineer, you will be responsible for developing and maintaining our SaaS projects. You will work closely with our experienced developers and have the opportunity to learn and grow in a fast-paced and collaborative environment. Our team is passionate about creating cutting-edge products using the latest technologies. We primarily work with Java, Spring Boot, and Kafka, and we constantly strive to adopt new technologies to stay ahead in the industry.

Responsibilities:


Develop, test, and deploy high-quality software solutions using Java, Spring Boot, and Kafka
Collaborate with the development team to design and implement new features and functionalities
Write clean, efficient, and maintainable code that adheres to industry best practices
Participate in code reviews and provide constructive feedback to peers
Troubleshoot and debug issues, and provide timely resolutions
Stay up-to-date with emerging technologies and suggest innovative solutions to improve product performance and scalability

Requirements:


Bachelor’s degree in Computer Engineering, Software Engineering or equivalent
Proficient in Java programming language.
Familiarity with Spring Boot framework and Kafka messaging system.
Familiar with CI/CD processes.
Solid understanding of software development lifecycle and agile methodologies.
Strong problem-solving and analytical skills.
Excellent communication and collaboration abilities.
Ability to learn quickly and adapt to new technologies.
Fluency in both written and spoken English
Having basic NoSQL knowledge is a plus
Having basic Python knowledge is a plus</p>
      </div>
    </div>
  );
};

export default JobsDetails;
