<template
  ><div>
    <h1>Http</h1>
    <div class="form-group">
      <label>Username</label>
      <input class="form-control" type="text" v-model="user.username" />
    </div>
    <div class="form-group">
      <label>Mail</label>
      <input class="form-control" type="text" v-model="user.email" />
    </div>
    <button class="btn btn-primary" @click="submit">Submit</button>
    <hr />
  </div>

  <!-- + -->
  <!-- <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">{{ u.username }} - {{ u.email }}</li>
                </ul> -->
</template>

<script>
export default {
  name: "uploadData",
  data() {
    return {
      user: {
        userName: "",
        email: ""
      },
      projectsData: [
        {
          _id: "5d85462a207a30028b16400a",
          title:
            "Construisons un réseau d'eau pour les réfugiés et les villageois de Gado !",
          asso_id: "5d8543aef61a819c88075124",
          description:
            "Curabitur quis accumsan nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
          photos: [
            "https://static.goodeed.com/pictures/project/03615bf9-2d79-4942-bc33-ea0ab9208d52.JPEG",
            "https://static.goodeed.com/pictures/project/77cbbac3-846b-46e1-ba9f-dc9d9aedb945.JPEG"
          ],
          country: "Cameroun",
          donation_goal: 20000,
          donation_current: 6785
        },
        {
          _id: "5d854642207a30028b16400b",
          title: "Aidons 17 familles Rohingyas grâce à des kits de survie !",
          asso_id: "5d8543aef61a819c88075124",
          description:
            "Curabitur quis accumsan nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
          photos: [
            "https://static.goodeed.com/pictures/project/8c8bc49e-4ff7-4031-8f7f-498d28cdcf23.JPEG",
            "https://static.goodeed.com/pictures/project/eab817d0-bb70-4055-9e34-788bba01b6f2.JPEG"
          ],
          country: "Birmanie",
          donation_goal: 30000,
          donation_current: 5741
        },
        {
          _id: "5d854650207a30028b16400c",
          title: "110 journées de vacances pour des enfants défavorisés !",
          asso_id: "5d8543aef61a81994e075125",
          description:
            "Curabitur quis accumsan nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
          photos: [
            "https://static.goodeed.com/pictures/project/9cfa57ae-5a5c-4b01-8004-17c712dae7b6.JPEG",
            "https://static.goodeed.com/pictures/project/fdd76d5f-88bf-4620-89fe-0a0208a64e86.JPEG"
          ],
          country: "France",
          donation_goal: 5000,
          donation_current: 1402
        },
        {
          _id: "5d854662207a30028b16400d",
          title: "335 duvets pour des personnes sans-abri en France !",
          asso_id: "5d8543aef61a81994e075125",
          description:
            "Curabitur quis accumsan nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
          photos: [
            "https://static.goodeed.com/pictures/project/925ad327-fa0b-4f57-8ba0-6a39c5e8b07d.JPEG",
            "https://static.goodeed.com/pictures/project/2ac9ee7c-aada-4afe-b6e2-c659e94c1de8.JPEG"
          ],
          country: "France",
          donation_goal: 10000,
          donation_current: 9845
        }
      ],
      adCampaignData: [
        {
          _id: "5d85d51e4672659fbd4184d9",
          title: "IBM",
          redirect_uri: "ibm.com",
          video_uri:
            "https://static.goodeed.com/pictures/campaign/ads/c7865faa-a51f-4dcb-88c1-eb53b75e762e.mp4"
        },
        {
          _id: "5d85d5314672659fbd4184db",
          title: "Apple",
          redirect_uri: "apple.com",
          video_uri:
            "https://static.goodeed.com/pictures/campaign/ads/f6614b7f-2986-4063-a6f9-2ba2d842fc55.mp4"
        },
        {
          _id: "5d85d5374672659fbd4184dc",
          title: "Google",
          redirect_uri: "google.com",
          video_uri:
            "https://static.goodeed.com/pictures/campaign/ads/f829817e-deb6-4be9-9d4f-097443f97267.mp4"
        }
      ],
      associationData: [
        {
          _id: "5d8543aef61a819c88075124",
          title: "Solidarités International",
          description:
            "ONG humanitaire basée à Paris pour répondre aux besoins vitaux (boire, manger et s’abriter) des victimes de la guerre ou de catastrophes naturelles.",
          logo:
            "https://static.goodeed.com/pictures/association/3e74ee12b6abfa344c185a04348b33e7.png"
        },
        {
          _id: "5d8543aef61a81994e075125",
          title: "Secours Populaire de Paris",
          description:
            "Le Secours populaire multiplie, depuis 70 ans, les actions pour lutter contre la précarité et l'exclusion en France et à l’international.",
          logo:
            "https://static.goodeed.com/pictures/association/7b888347-2adb-4995-a3b3-d305526035d8.PNG"
        }
      ]
    };
  },
  methods: {
    submit() {
      this.$http
        .post(
          "https://goodproject-7340a.firebaseio.com/adCampData.json",
          this.adCampaignData
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
