import { SendEmailProps } from "@/app/api/send-email/route";
import { textVariants } from "@/utils/constants/textVariants";
import React from "react";

export default function EmailTemplate({ message, language }: SendEmailProps) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "white",
        width: "100%",
      }}
    >
      <table
        align="center"
        style={{
          textAlign: "center",
          verticalAlign: "top",
          backgroundColor: "#ffffff",
          width: "80%",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                verticalAlign: "top",
                padding: "0.5em 0em",
                width: "80%",
                margin: 0,
              }}
            >
              <img
                style={{
                  width: "40%",
                  margin: "0.5em auto",
                  height: "auto",
                  textAlign: "center",
                  color: "#ffffff",
                }}
                alt="Logo"
                src="https://luishenrique.vercel.app/images/logo/logo-black-text-full-with-bg.png"
              />
            </td>
          </tr>
        </tbody>
      </table>

      <img
        style={{ width: "80%", height: "auto", textAlign: "center" }}
        alt="Hero image"
        src="https://luishenrique.vercel.app/images/background/light/experience-bg-img.jpg"
      />

      <table
        align="center"
        style={{
          textAlign: "center",
          verticalAlign: "top",
          backgroundColor: "#ffffff",
          width: "80%",
        }}
      >
        <tbody>
          <tr>
            <td
              style={{
                verticalAlign: "top",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "20px",
                paddingBottom: "40px",
              }}
            >
              <h1
                style={{
                  fontSize: "18px",
                  lineHeight: "24px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  color: "#000000",
                  margin: "2em 0",
                }}
              >
                {
                  textVariants.sections.contacts.contact.form.email.title[
                    language
                  ]
                }
              </h1>

              <div
                style={{
                  fontSize: "15px",
                  lineHeight: "24px",
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontWeight: 400,
                  color: "#919293",
                  margin: "1.5em 0",
                }}
              >
                <div
                  style={{
                    margin: "0.8em 0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#363636",
                      margin: 0,
                    }}
                  >
                    {
                      textVariants.others.labels.contacts.contact.form.toast
                        .success.accordion.content.message.sentBy[language]
                    }
                  </p>
                  <p style={{ color: "#575757", margin: 0, fontSize: "14px" }}>
                    {message.name} ({message.email})
                  </p>
                </div>

                <div
                  style={{
                    margin: "0.8em 0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#363636",
                      margin: 0,
                    }}
                  >
                    {
                      textVariants.others.labels.contacts.contact.form.toast
                        .success.accordion.content.message.sentAt[language]
                    }
                  </p>
                  <p style={{ color: "#575757", margin: 0, fontSize: "14px" }}>
                    {message.sentAt}
                  </p>
                </div>

                <div
                  style={{
                    margin: "0.8em 0",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#363636",
                      margin: 0,
                    }}
                  >
                    {
                      textVariants.others.labels.contacts.contact.form.toast
                        .success.accordion.content.message.content[language]
                    }
                  </p>
                  <p style={{ color: "#575757", margin: 0, fontSize: "14px" }}>
                    {message.message}
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
