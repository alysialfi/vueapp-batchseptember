<script>
export default {
    name: 'NotificationPage',
    data() {
        return {
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
        }
    },
}
</script>

<template>
    <div class="w-screen flex overflow-auto">
        <div class="w-6/12 mx-auto h-screen bg-white shadow-lg px-12 py-10">
            <!-- header -->
            <div class="flex justify-between mb-6 items-end">
                <div class="flex gap-1 items-center">
                    <h1 class="font-bold text-lg">Notification</h1>
                    <span class="px-2 bg-blue-900 text-white font-semibold rounded-md text-center">3</span>
                </div>
                <span class="text-sm text-gray-500">Mark all as read</span>
            </div>

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
    </div>
</template>