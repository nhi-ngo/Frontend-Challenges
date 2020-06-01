const projects = [
  {
    name: 'huddle-landing-page',
  },
  {
    name: 'four-card-feature',
  },
  {
    name: 'fylo-landing-page',
  },
  {
    name: 'base-apparel',
  },
  {
    name: 'signup-form',
  },
  {
    name: 'price-grid',
  },
  {
    name: 'ping-landing-page',
  },

  {
    name: 'insure-landing-page',
  },
  {
    name: 'pricing-toggle',
  },
  {
    name: 'clipboard-landing-page',
  },
  {
    name: 'project-tracking-intro',
  },
  {
    name: 'social-media-dashboard',
  },
  {
    name: 'job-listings-react',
  },
  {
    name: 'recipe-react',
  },
];

const list = document.getElementById('list');

projects.forEach(({ name }, i) => {
  const listItem = document.createElement('li');

  listItem.innerHTML = `
		<a href = "./${name}/index.html" >
			<img src="./${name}/design/desktop-design.jpg" alt="${name}" />
    </a>
    <p>${i + 1}. ${formatName(name)}</p>

	`;
  list.appendChild(listItem);
});

function formatName(name) {
  return name
    .split('-')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
