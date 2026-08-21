<script setup lang="ts">
import LoopingVideo from '@/components/common/LoopingVideo.vue';
import vid from '@/assets/video/tv-review.webm'

const information = [
    {
        title: 'Introduction',
        desc: 'A mobile app for searching and rating television series. Users can search for shows, explore detailed information about each series, browse seasons and episodes, and rate the shows they watch.'
    },
    {
        title: 'Features',
        desc: `<ul class="flex flex-col gap-2">
            <li><p>&bull; User Authentication: <span class="opacity-70">To allow personalised experiences, the application requires users to log into their accounts</span></p>
            </li>
            <li><p>&bull; Search: <span class="opacity-70">The bread and butter of the application is to allow user to search for television shows</span></p>
            </li>
            <li><p>&bull; Ratings: <span class="opacity-70">User can rate shows, seasons and episodes!</span></p>
            </li>
            </ul>`
    },
    {
        title: 'Tech Stack',
        desc: 'MEVN: MongoDB, Express.js, Vue3, Node'
    },
    {
        title: 'User Authentication',
        desc: 'User authentication is implemented in a simple fashion - <pre class="text-sm inline-block">bcrypt.hash(password, 10)</pre> is used to store users\' password in the database while <pre class="text-sm inline-block">bcrypt.compare(password, user.hashedPassword)</pre> is used to authenticate. JWT is being used for session authentication along with Express.js middleware.'
    },
    {
        title: 'Data & Database',
        desc: 'Movie and TV data is sourced from <a href="https://www.themoviedb.org/">TMDB</a> and cached in the MongoDB server to improve performance and reduce unnecessary API requests.'
    },
    {
        title: 'Design',
        desc: 'The app uses a bold Neo-Brutalist design, combining bright colors, strong typography, and playful visual elements to create a distinctive and engaging user experience - just like this website!'
    }
]

</script>

<template>
    <div class="fade-in h-full flex flex-col gap-8">
        <div class="text-2xl font-medium bg-[#f8cb46] p-1 px-4 rounded">Tv Review App</div>
        <div class="flex gap-8 min-h-0 h-full">
            <div class="w-1/3 flex flex-col justify-start shrink-0 gap-4">
                <div class="flex min-h-0">
                    <LoopingVideo class="rounded-lg border-white border-2" :src="vid"></LoopingVideo>
                </div>
            </div>
            <div class="h-full overflow-y-scroll grow flex flex-col gap-6 pr-4">
                <div class="flex flex-col gap-2" v-for="i of information" :key="i.title">
                    <span class="text-sm accent-text text-gray-800">{{ i.title }}</span>
                    <p class="text-lg text-[#282825]"><span v-html="i.desc"></span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- - User Authentication
    - To allow personalised experiences, the application requires users to log into their accounts
    - User authentication is implemented in a simple fashion - `bcrypt.hash(password, 10)` is used to store users' password in the database while `bcrypt.compare(password, user.hashedPassword)` is used to authenticate.
    - JWT is being used for session authentication along with Express.js middleware

- Search
    - The bread and butter of the application is to allow user to search for television shows
    - [TMDB API](https://www.themoviedb.org/) is being used

- Ratings
    - User can rate shows, seasons and episodes! -->