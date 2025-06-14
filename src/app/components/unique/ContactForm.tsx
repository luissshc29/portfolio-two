"use client";

import React, { useState } from "react";
import { Input } from "@/shadcn/components/ui/input";
import { Textarea } from "@/shadcn/components/ui/textarea";
import { Label } from "@/shadcn/components/ui/label";
import { Button } from "@/shadcn/components/ui/button";
import { Badge } from "@/shadcn/components/ui/badge";
import { useLanguageContext } from "@/utils/context/LanguageContext";
import { textVariants } from "@/utils/constants/textVariants";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { IoIosClose } from "react-icons/io";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shadcn/components/ui/accordion";
import { FiInfo } from "react-icons/fi";
import { weekDays } from "@/utils/constants/weekDays";
import { CgSpinner } from "react-icons/cg";
import LoadingSVG from "@/utils/svg/Loading";

export type MessageData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const { language } = useLanguageContext();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MessageData>({
    defaultValues: { name: "", email: "", message: "" },
  });

  let name = watch("name");
  let email = watch("email");
  let message = watch("message");

  const submitForm: SubmitHandler<MessageData> = async (data) => {
    const date = new Date();

    const sentAt = `${date.toLocaleTimeString(language === "br" ? "pt-BR" : "en-US")}, ${weekDays.find((d) => d.value === date.getDay())?.day[language]}, ${date.toLocaleDateString(language === "br" ? "pt-BR" : "en-US")}`;

    setLoading(true);

    const fullMessageData = {
      ...data,
      sentAt,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: fullMessageData,
          language,
        }),
      });

      const result = await response.json();

      if (!response.ok)
        throw new Error(JSON.stringify(result).replace("Error: ", ""));
      reset();
      setLoading(false);
      toast(
        <div className="relative flex flex-col items-start gap-4 bg-green-200 p-4 w-full h-fit text-sm md:text-base">
          <button
            className="top-2 right-2 absolute text-green-900 text-3xl"
            onClick={() => {
              toast.dismiss();
            }}
          >
            <IoIosClose />
          </button>
          <div className="items-center gap-3 font-bold text-green-900 text-base text-left">
            {
              textVariants.sections.contacts.contact.form.toast.success.title[
                language
              ]
            }
            <p className="font-normal text-green-700 text-sm">
              {
                textVariants.sections.contacts.contact.form.toast.success
                  .description[language]
              }
            </p>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex justify-start items-center gap-2 px-0 w-fit">
                  <div className="flex items-center gap-1.5 h-fit text-sm">
                    <FiInfo />{" "}
                    <span>
                      {
                        textVariants.others.labels.contacts.contact.form.toast
                          .success.accordion.trigger[language]
                      }
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-0">
                  <ul className="flex flex-col gap-2 text-left">
                    <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
                      <p className="text-sm">
                        {
                          textVariants.others.labels.contacts.contact.form.toast
                            .success.accordion.content.message.sentBy[language]
                        }
                      </p>
                      <p className="font-normal text-xs">
                        {fullMessageData.name} ({fullMessageData.email})
                      </p>
                    </li>
                    <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
                      <p className="text-sm">
                        {
                          textVariants.others.labels.contacts.contact.form.toast
                            .success.accordion.content.message.sentAt[language]
                        }
                      </p>
                      <p className="font-normal text-xs">
                        {fullMessageData.sentAt}
                      </p>
                    </li>
                    <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
                      <p className="text-sm">
                        {
                          textVariants.others.labels.contacts.contact.form.toast
                            .success.accordion.content.message.content[language]
                        }
                      </p>
                      <p className="font-normal text-xs">
                        {fullMessageData.message}
                      </p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>,
        {
          duration: 15000,
          classNames: {
            toast:
              "w-full min-w-[50vw] h-auto max-h-fit border-green-500 dark:border-green-900",
          },
          className: "contact-form-toast-success",
        },
      );
    } catch (err: any) {
      const error: { message: string; name: string; statusCode: number } =
        JSON.parse(err.message).error;

      setLoading(false);
      toast(
        <div className="relative flex flex-col items-start gap-4 bg-red-200 p-4 w-full h-fit text-sm md:text-base">
          <button
            className="top-2 right-2 absolute text-red-900 text-3xl"
            onClick={() => {
              toast.dismiss();
            }}
          >
            <IoIosClose />
          </button>
          <div className="items-center gap-3 font-bold text-red-900 text-base text-left">
            {
              textVariants.sections.contacts.contact.form.toast.error.title[
                language
              ]
            }
            <p className="font-normal text-red-700 text-sm">
              {
                textVariants.sections.contacts.contact.form.toast.error
                  .description[language]
              }
            </p>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="flex justify-start items-center gap-2 px-0 w-fit">
                  <div className="flex items-center gap-1.5 h-fit text-sm">
                    <FiInfo />{" "}
                    <span>
                      {
                        textVariants.others.labels.contacts.contact.form.toast
                          .error.accordion.trigger[language]
                      }
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="py-0">
                  <ul className="flex flex-col gap-2 text-left">
                    <li className="flex flex-col items-start gap-1 text-sm lg:text-base">
                      <p className="text-sm">
                        {error.name}
                        {/* {
                          textVariants.others.labels.contacts.contact.form.toast
                            .error.accordion.content.error[language]
                        } */}
                      </p>
                      <p className="font-normal text-xs">{`${error.statusCode} ${error.message}`}</p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>,
        {
          duration: 15000,
          classNames: {
            toast:
              "w-full min-w-[50vw] h-auto max-h-fit border-red-500 dark:border-red-900",
          },
          className: "contact-form-toast-error",
        },
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="flex flex-col items-start gap-6 md:gap-4 p-4 text-left"
    >
      <div className="flex flex-col items-start gap-2 mb-3 w-full">
        <div className="flex items-center gap-2">
          <h2 className="font-title font-bold text-2xl md:text-3xl">
            {textVariants.sections.contacts.contact.form.title[language]}
          </h2>{" "}
          {/* <Badge
            variant="secondary"
            className="flex items-center gap-[3px] bg-green-500 hover:bg-green-500 hover:dark:bg-green-400 dark:bg-green-400 hover:dark:bg-opacity-50 dark:bg-opacity-50 w-fit font-text text-[10px] text-white md:text-sm"
          >
            {textVariants.sections.contacts.contact.form.badge[language]}
          </Badge> */}
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-xs md:text-sm">
          {textVariants.sections.contacts.contact.form.subtitle[language]}
        </p>
      </div>
      <div className="w-full contact-form-container-input">
        <Input
          id="contact-form-name"
          required
          className="bg-transparent ring-0 focus-visible:ring-0 focus:ring-0 text-sm md:text-base contact-form-input [backdrop-filter:blur(8px)]"
          placeholder={
            textVariants.others.labels.contacts.contact.form.fields.name[
              language
            ]
          }
          {...register("name", {
            required: true,
          })}
        />
        <Label
          htmlFor="contact-form-name"
          className="font-bold text-xs md:text-sm contact-form-label"
        >
          {
            textVariants.others.labels.contacts.contact.form.fields.name[
              language
            ]
          }
        </Label>
      </div>
      <div className="w-full contact-form-container-input">
        <Input
          id="contact-form-email"
          required
          type="email"
          className="bg-transparent ring-0 focus-visible:ring-0 focus:ring-0 text-sm md:text-base contact-form-input [backdrop-filter:blur(8px)]"
          placeholder={
            textVariants.others.labels.contacts.contact.form.fields.email[
              language
            ]
          }
          {...register("email", {
            required: true,
          })}
        />
        <Label
          htmlFor="contact-form-email"
          className="font-bold text-xs md:text-sm contact-form-label"
        >
          {
            textVariants.others.labels.contacts.contact.form.fields.email[
              language
            ]
          }
        </Label>
      </div>
      <div className="w-full contact-form-container-input">
        <Textarea
          id="contact-form-message"
          required
          className="bg-transparent ring-0 focus-visible:ring-0 focus:ring-0 text-sm md:text-base contact-form-textarea contact-form-input [backdrop-filter:blur(8px)]"
          placeholder={
            textVariants.others.labels.contacts.contact.form.fields.message[
              language
            ]
          }
          {...register("message", {
            required: true,
          })}
        />
        <Label
          htmlFor="contact-form-message"
          className="font-bold text-xs md:text-sm contact-form-label"
        >
          {
            textVariants.others.labels.contacts.contact.form.fields.message[
              language
            ]
          }
        </Label>
      </div>
      <Button
        type="submit"
        disabled={
          name.length === 0 ||
          email.length === 0 ||
          message.length === 0 ||
          loading
        }
        className="w-fit duration-300"
      >
        {loading ? (
          // <CgSpinner className="text-xl animate-load" />
          <LoadingSVG className="opacity-70 dark:opacity-50 w-5 h-5 dark:[filter:invert(.8)]" />
        ) : (
          textVariants.sections.contacts.contact.form.button[language]
        )}
      </Button>
    </form>
  );
}
