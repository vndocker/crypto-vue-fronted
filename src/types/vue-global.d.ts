import { Client } from "sails.io.js";

declare module "vue/types/vue" {
  interface Vue {
    $_: LoDashStatic;
  }

  interface Vue {
    $io: Client;
  }
}
