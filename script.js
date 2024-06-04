document.addEventListener("DOMContentLoaded", function() {
    fetch('cursos.json')
      .then(response => response.json())
      .then(data => {
        const courses = data.courses;
        const courseList = document.getElementById('courses');
        const sectionListDiv = document.getElementById('section-list');
        const sectionList = document.getElementById('sections');
        const sectionContentDiv = document.getElementById('section-content');
        const content = document.getElementById('content');
  
        // Carregar a lista de cursos
        courses.forEach(course => {
          const li = document.createElement('li');
          li.textContent = course.name;
          li.dataset.courseId = course.id;
          li.addEventListener('click', () => {
            // Exibir seções do curso selecionado
            sectionList.innerHTML = '';
            course.sections.forEach(section => {
              const sectionLi = document.createElement('li');
              sectionLi.textContent = section.title;
              sectionLi.dataset.sectionContent = section.content;
              sectionLi.addEventListener('click', () => {
                // Exibir o conteúdo da seção selecionada
                content.textContent = section.content;
                sectionContentDiv.classList.remove('hidden');
              });
              sectionList.appendChild(sectionLi);
            });
            sectionListDiv.classList.remove('hidden');
          });
          courseList.appendChild(li);
        });
      })
      .catch(error => console.error('Erro ao carregar os cursos:', error));
  });
  