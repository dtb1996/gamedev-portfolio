<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      UI Engineer with experience developing original PC games and
      specializing in Unreal Engine development. Skilled in implementing
      robust and responsive user interfaces while adhering to tight production
      deadlines.
      <!--
      <br/><br/>
      <router-link to="/contact">Contact me</router-link>.
      -->
      <br/><br/>

      <div>
        <a class="download-link" href="d/dillon_bellefeuille_resume.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <!--
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>
    -->

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Unreal Engine UI Engineer - Canoo</h3>
      <h4>2022-Present</h4>
      
      <div>
        <ul>
          <li>Used Unreal Engine to create HMI software that would be delivered for production vehicles.</li>
          <li>Worked with team to develop a comprehensive set of HMI components.</li>
          <li>Worked closely with UI/UX team to ensure designs were completed to spec within in Unreal Engine.</li>
          <li>Collaborated with the scrum master to break down tasks and maintain the embedded software backlog.</li>
        </ul>
      </div>

      <div class="tech-stack">Unreal Engine, Visual Studio, Qt/Qml, C++, Blueprints, JavaScript, Git, Perforce, Bitbucket</div>

      <h3>Grocery Manager - Shaw's Supermarkets</h3>
      <h4>2015-2022</h4>
      
      <div>
        <ul>
          <li>Ordered for and managed inventory levels for grocery, dairy, and frozen departments, contributing to a sales increase of 46%.</li>
          <li>Consulted with vendors from 20+ external companies to meet store inventory needs and receive credit for out of code products.</li>
          <li>Accepted incoming warehouse and vendor deliveries, verifying invoices for accuracy.</li>
          <li>Mentored team members leading to a department efficiency increase of 25%.</li>
        </ul>
      </div>

      <div class="tech-stack">Management, Receiving, Customer Relations</div>

      <h3>Into the Knight (PC) - Independent</h3>
      <h4>2021</h4>
      
      <div>
        <ul>
          <li>Designed and developed all game functionality, including gameplay, UI, and visual effects.</li>
          <li>Improved game experience by gathering feedback from 6 testers.</li>
          <li>Consulted with 2 external artists to create assets that followed the project’s existing art style.</li>
          <li>Created a modular interface system that allowed menus to be quickly created and customized.</li>
        </ul>
      </div>

      <div class="tech-stack">Godot, GDScript, Git, GitHub</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Software</h3>
        <SkillRate name="Unreal Engine" :rate="5" />
        <SkillRate name="Visual Studio" :rate="4" />
        <SkillRate name="Qt" :rate="4" />
        <SkillRate name="Godot" :rate="3" />
        <SkillRate name="Bitbucket" :rate="5" />
        <SkillRate name="Perforce" :rate="4" />
        <SkillRate name="Git" :rate="5" />
      </div>

      <div class="skill-set">
        <h3>Programming/Scripting</h3>
        <SkillRate name="C++" :rate="4" />
        <SkillRate name="JavaScript" :rate="4" />
        <SkillRate name="Python" :rate="4" />
        <SkillRate name="Blueprints" :rate="4" />
        <SkillRate name="C#" :rate="3" />
        <SkillRate name="HTML" :rate="2" />
        <SkillRate name="CSS" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Southern New Hampshire University, Manchester, NH</h3>
      <h4>B.S. Game Programming and Development (GPA 3.9/4.0) | 2017-2020</h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>