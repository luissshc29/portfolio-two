import React from "react";
import { Job } from "./Job";
import { Project } from "./Project";
import { SocialMedia } from "./Social";
import { HeaderOption } from "./HeaderOption";
import { ThemeSelectorOption } from "./ThemeSelectorOption";
import { Tab } from "./Tab";

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
      toast: {
        title: {
          br: React.ReactNode;
          us: React.ReactNode;
        };
        subtitle: {
          br: React.ReactNode;
          us: React.ReactNode;
        };
        description: {
          br: string;
          us: string;
        };
        buttons: {
          continue: {
            br: string;
            us: string;
          };
          notShow: {
            br: string;
            us: string;
          };
        };
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
      resume: {
        button: {
          text: {
            primary: {
              br: string;
              us: string;
            };
            secondary: {
              br: string;
              us: string;
            };
          };
        };
        document_url: {
          br: string;
          us: string;
        };
      };
      audio: {
        url: {
          br: string;
          us: string;
        };
      };
    };
    tech: {
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
        touch: {
          br: string;
          us: string;
        };
        hover: {
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
      tabs: Tab[];
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
        br: React.ReactElement;
        us: React.ReactElement;
      };
      social: {
        media: SocialMedia[];
        whatsapp_message: {
          br: string;
          us: string;
        };
      };
      alert: {
        google_form: {
          br: React.ReactElement;
          us: React.ReactElement;
        };
      };
      contact: {
        phone: {
          tooltip: {
            icon: React.ReactElement;
            text: {
              br: string;
              us: string;
            };
          };
          text: string;
          raw: string;
        };
        email: {
          tooltip: {
            icon: React.ReactElement;
            text: {
              br: string;
              us: string;
            };
          };
          text: string;
        };
        location: {
          tooltip: {
            icon: React.ReactElement;
            text: {
              br: string;
              us: string;
            };
          };
          city: {
            br: string;
            us: string;
          };
          state: {
            br: string;
            us: string;
          };
          country: {
            br: string;
            us: string;
          };
          url: string;
        };
        form: {
          title: {
            br: string;
            us: string;
          };
          subtitle: {
            br: string;
            us: string;
          };
          badge: {
            br: string;
            us: string;
          };
          button: {
            br: string;
            us: string;
          };
          toast: {
            success: {
              title: {
                br: string;
                us: string;
              };
              description: {
                br: string;
                us: string;
              };
            };
            error: {
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
      };
    };
  };
  others: {
    header: {
      options: HeaderOption[];
    };
    labels: {
      jobs: {
        accordion: {
          br: string;
          us: string;
        };
      };
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
          complexity: {
            br: string;
            us: string;
          };
        };
      };
      contacts: {
        social: {
          br: string;
          us: string;
        };
        contact: {
          phone: {
            br: string;
            us: string;
          };
          email: {
            br: string;
            us: string;
          };
          location: {
            br: string;
            us: string;
          };
          form: {
            fields: {
              name: {
                br: string;
                us: string;
              };
              email: {
                br: string;
                us: string;
              };
              message: {
                br: string;
                us: string;
              };
            };
            toast: {
              success: {
                accordion: {
                  trigger: {
                    br: string;
                    us: string;
                  };
                  content: {
                    message: {
                      sentBy: {
                        br: string;
                        us: string;
                      };
                      sentAt: {
                        br: string;
                        us: string;
                      };
                      content: {
                        br: string;
                        us: string;
                      };
                    };
                  };
                };
              };
              error: {
                accordion: {
                  trigger: {
                    br: string;
                    us: string;
                  };
                  content: {
                    error: {
                      br: string;
                      us: string;
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
    themeSelector: {
      options: ThemeSelectorOption[];
    };
    functions: {
      sendEmail: {
        subject: {
          prefix: {
            br: string;
            us: string;
          };
        };
      };
    };
  };
};
