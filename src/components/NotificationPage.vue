<script>
    // const username = document.getElementById('name').value
export default {
    name: 'NotificationPage',
    data() {
        return {
            categories: [],
            notificationBody: {
                name: '',
                action: 'join',
                message: ''
            },
            isModalOpen: false,
            notifs: [
                {
                    name: 'Jacob Thompson',
                    avatar: 'jacob-thompson',
                    action: 'join',
                    time: '1 day ago',
                    hasRead: true
                },
                {
                    name: 'Angela Gray',
                    avatar: 'angela-gray',
                    action: 'follow',
                    time: '5 min ago',
                    hasRead: true
                },
                {
                    name: 'Rizky Hasanuddin',
                    avatar: 'rizky-hasanuddin',
                    action: 'message',
                    time: '5 days ago',
                    message: "Hello, thanks for setting up the Chese Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
                    hasRead: false
                }
            ],
            jewelryData: null
        }
    },
    methods: {
        addNotification() {
            const newNotif = {
                name: this.notificationBody.name,
                action: this.notificationBody.action,
                message: this.notificationBody.message,
                time: '1 sec ago',
                hasRead: false
            }
            this.notifs.push(newNotif)
            this.isModalOpen = false
            for (const body in this.notificationBody) {
                this.notificationBody[body] = ''
            }
        },
        // async callCategoryAPI() {
        //     // fetch('https://fakestoreapi.com/products/categories')
        //     // .then((response) => response.json())
        //     // .then((result) => console.log(result))

        //     const api = await fetch('https://fakestoreapi.com/products/categories')
        //     const categories = await api.json()
        //     this.categories = categories
        //     console.log(categories);
        // }
    },
    mounted() {
        // this.callCategoryAPI()
    },
}
</script>

<template>
    <div class="relative w-screen flex">
        <div class="relative w-6/12 mx-auto h-screen bg-white shadow-lg px-12 py-10 overflow-auto">
            <!-- header -->
            <div class="flex justify-between mb-6 items-end">
                <div class="flex gap-1 items-center">
                    <h1 class="font-bold text-lg">Notification</h1>
                    <span class="px-2 bg-blue-900 text-white font-semibold rounded-md text-center">{{ notifs.length }}</span>
                </div>
                <span class="text-sm text-gray-500">Mark all as read</span>
            </div>
            <!-- <div v-for="(category, index) in categories" :key="index">
                {{ category }}
            </div> -->

            <!-- content -->
            <div v-for="(notif, index) in notifs" :key="index" class="p-4 bg-slate-100 rounded-md mb-4">
                <!-- container notif -->
                <div class="flex gap-4 items-start">
                    <!-- avatar -->
                    <!-- TODO: CHANGE TO BASE64 -->
                    <img src="../assets/images/avatar-jacob-thompson.webp" alt="avatar thumbnail" class="w-10">
                    <!-- text -->
                    <div class="">
                        <div>
                            <p v-if="notif.action === 'join'"><b>{{ notif.name }}</b> has join your group <b class="text-gray-600">Chese Club</b></p>
                            <p v-else-if="notif.action === 'follow'"><b>{{ notif.name }}</b> followed you</p>
                            <p v-else><b>{{ notif.name }}</b> sent you a private message</p>
                            <span class="text-gray-500 text-sm cursor-pointer">{{ notif.time }}</span>
                        </div>
                        <!-- <div class="mt-2 w-3 h-3 rounded-full bg-red-500"></div> -->
                        <div v-if="notif.action === 'message'" class="border-2 border-gray-200 p-2 rounded-md">
                            <p class="text-gray-700">{{ notif.message }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- button add -->
        <div class="absolute bottom-4 right-[27%]">
            <button id="show-btn" @click="isModalOpen = true" class="w-10 h-10 rounded-full bg-orange-400 text-white font-semibold text-3xl flex justify-center items-center hover:bg-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>  
            </button>
        </div>

        <!-- modal -->
        <div v-if="isModalOpen" class="absolute flex items-center translate-x-1/2 h-screen w-6/12 bg-gray-500 bg-opacity-30">
        <!-- <div :class="isModalOpen ? 'block' : 'hidden'" class="absolute flex items-center translate-x-1/2 h-screen w-6/12 bg-gray-500 bg-opacity-30"> -->
            <div id="modal" class="w-full bg-white rounded-md mx-8 p-4 flex flex-col gap-2">
                <div class="flex justify-between items-start">
                    <span class="mb-2 font-semibold">Add Notification</span>
                    <button  @click="isModalOpen = false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="text-red-500 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <input v-model="notificationBody.name" type="text" id="name" class="w-full h-10 p-2 rounded-md border-2 border-gray-200" placeholder="Name">
                <select v-model="notificationBody.action" name="action" id="action" class="w-full h-10 p-2 rounded-md border-2 bg-white border-gray-200">
                    <option value="" selected>Choose action</option>
                    <option value="join">Join</option>
                    <option value="follow">Follow</option>
                    <option value="message">Message</option>
                </select>
                <textarea v-if="notificationBody.action === 'message'" v-model="notificationBody.message" name="message" id="message" placeholder="Write your message" class="w-full h-36 p-2 rounded-md border-2 border-gray-200"></textarea>
                <button @click="addNotification" id="add-btn" class="w-16 py-1 text-white bg-orange-400 rounded-md mt-2 hover:bg-orange-500">Add</button>
            </div>
        </div>
    </div>
</template>
