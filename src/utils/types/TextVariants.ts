import React from "react";
import { Job } from "./Job";
import { Project } from "./Project";
import { Social } from "./Social";
import { HeaderOptions } from "./HeaderOptions";

export type TextVariants = {
  sections: {
    welcome: {
      title: {
        main: {
          br: string;
          us: string;
        };
        bg: {
          br: string;
          us: string;
        };
      };
      subtitle: {
        br: string;
        us: string;
      };
    };
    language: {
      title: {
        main: {
          br: string;
          us: string;
        };
        bg: {
          br: string;
          us: string;
        };
      };
      subtitle: {
        br: string;
        us: string;
      };
    };
    about: {
      title: {
        main: {
          br: string;
          us: string;
        };
        bg: {
          br: string;
          us: string;
        };
      };
      paragraph: {
        br: React.ReactElement;
        us: React.ReactElement;
      };
      subtitle: {
        br: string;
        us: string;
      };
      link: {
        br: string;
        us: string;
      };
      audio: {
        url: {
          br: string;
          us: string;
        };
      };
    };
    experience: {
      title: {
        main: {
          br: string;
          us: string;
        };
        bg: {
          br: string;
          us: string;
        };
      };
      jobs: Job[];
    };
    projects: {
      title: {
        main: {
          br: string;
          us: string;
        };
        bg: {
          br: string;
          us: string;
        };
      };
      subtitle: {
        br: string;
        us: string;
      };
      caption: {
        br: string;
        us: string;
      };
      list: Project[];
    };
    contacts: {
      title: {
        main: {
          br: string;
          us: string;
        };
        bg: {
          br: string;
          us: string;
        };
      };
      subtitle: {
        br: string;
        us: string;
      };
      info: {
        social: Social[];
        phone: {
          text: string;
          raw: string;
        };
        email: {
          text: string;
        };
        whatsappMessage: {
          br: string;
          us: string;
        };
      };
      toast: {
        title: {
          br: string;
          us: string;
        };
        description: {
          br: string;
          us: string;
        };
      };
    };
  };
  others: {
    header: {
      options: HeaderOptions[];
    };
    labels: {
      projects: {
        card: {
          text: {
            br: string;
            us: string;
          };
        };
        modal: {
          description: {
            br: string;
            us: string;
          };
          stacks: {
            br: string;
            us: string;
          };
          date: {
            br: string;
            us: string;
          };
          link: {
            br: string;
            us: string;
          };
          repo: {
            br: string;
            us: string;
          };
        };
      };
      contacts: {
        phone: {
          br: string;
          us: string;
        };
        email: {
          br: string;
          us: string;
        };
        social: {
          br: string;
          us: string;
        };
      };
    };
  };
};
