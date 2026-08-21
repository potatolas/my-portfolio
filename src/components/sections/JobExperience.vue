<template>
    <div class="flex flex-col py-12 px-24">
        <div class="flex">
            <div class="brutal-bg brutal-shadow rounded-xl p-4 text-4xl border-2 -translate-x-8">
                Work experiences
            </div>
        </div>
        <div class="flex border-l-2 items-start pt-12 pb-20 px-8" v-for="e of experiences">
            <div class="flex flex-col gap-2 border-2 p-8 brutal-bg brutal-shadow rounded-xl relative fade-in-on-seen">
                <div class="top-0 right-full mr-6.75 bottom-0 flex items-center absolute">
                    <div class="bg-black h-4 w-4 rounded-full"></div>
                </div>
                <span class="leading-none text-2xl flex gap-2">
                    <span class="font-medium">{{ e.role }}</span>
                    <span>|</span>
                    <span>{{ e.period }}</span>
                </span>
                <span class="leading-none text-2xl">{{ e.company }}</span>
                <div class="flex flex-col text-lg gap-2 mt-4">
                    <span v-for="r of e.responsibilities">&bull; {{ r }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const experiences = [
    {
        role: 'Software Engineer',
        period: 'June 2025 - Present',
        company: 'Patsnap Pte Ltd',
        responsibilities: [
            'Led web development as the sole frontend engineer in the Singapore office.',
            'Collaborated closely with cross-functional teams across multiple international offices to deliver company-wide business initiatives, including transforming the SaaS platform to support a product-led growth (PLG) model.',
            'Developed and maintained Vue 3 SaaS features, including AI agent workflows with Server-Sent Events (SSE), chatbot interfaces, and a custom query builder for advanced search pages.',
            'Established the frontend foundation of applications by defining the architecture, project structure, and development patterns for a scalable Vue 3 codebase.',
            'Built a shared component library, reusable composable modules, and state management architecture aligned with company design standards to ensure consistency across features.',
            'Designed the frontend–backend architecture for a Materials AI agent, defining API contracts, state synchronization, and data persistence using Redis Pub/Sub, SQL databases, and asynchronous background workers.',
        ]
    },
    {
        role: 'Full Stack Engineer',
        period: 'July 2022 - June 2025',
        company: 'InsiderSecurity Pte Ltd',
        responsibilities: [
            'Worked in a team of 8 engineers across Singapore and Malaysia to build a Cloud Security product from the ground up.',
            'Led frontend and UI/UX development using Vue 3, creating a reusable component library and intuitive interfaces with Figma.',
            'Built backend RESTful APIs in Node.js, including authentication and Stripe integration.',
            'Designed the web architecture and microservices using Kubernetes, Docker, Nginx, and Azure.',
            'Established engineering best practices for design, testing, and code reviews, improving code quality and reducing bugs.',
            'Contributed to the successful 2025 launch with paying customers, validating market demand.',
        ]
    },
    {
        role: 'Web Developer (Internship)',
        period: 'Jan 2021 - May 2021',
        company: 'Mashwire Pte Ltd',
        responsibilities: [
            'Developed frontend experiences using HTML, PHP, JavaScript, CSS, and WordPress CMS, including web banners for advertising campaigns using GSAP and JavaScript and marketing webpages for clients.',
            "Developed AR filters and interactive games using Facebook's Spark AR.",
        ]
    },
    {
        role: 'Software Developer (Internship)',
        period: 'May 2020 - July 2020',
        company: 'Toppan Ecquaria Pte. Ltd.',
        responsibilities: [
            'Collaborated on full-stack development of a Proof of Concept (PoC), contributing to both back-end development using Java and OOP principles and front-end development using ReactJS.',
            'Authored unit tests using Mockito and JUnit, achieving over 75% test coverage to ensure code reliability and maintainability.',
        ]
    },
]

</script>