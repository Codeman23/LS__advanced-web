import Vue from 'vue';

const skill = {
    template: '#skill',
    props: {
        title: String,
        percentage: Number
    },
    methods: {
      drawCircleDependsOnPercentage() {
          const circle = this.$refs.circle;
          const currentPercent =parseInt(
              getComputedStyle(circle).getPropertyValue('stroke-dashoffset')
          );

          const requiredDashoffset = (currentPercent / 100) * (100 - this.percentage);

          circle.style.strokeDashoffset = requiredDashoffset;
      }
    },
    mounted() {
        this.drawCircleDependsOnPercentage();
    }
};

const skillsRow = {
    template: '#skills-item',
    props: {
        skills: Object
    },
    components: {
        skill: skill
    }
};

new Vue({
    el: '#skills-component',
    components: {
        skillsRow: skillsRow
    },
    data() {
      return {
          skills: []
      }
    },
    created() {
        const data = require('../../data/skills.json');
        this.skills = data;
    },
    template: '#skills-list'

});

