import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

const toneStyles = {
  info: {
    content: "border-blue-400/30",
    title: "text-blue-200",
    action: "bg-blue-600 hover:bg-blue-700 text-blue-50",
  },
  success: {
    content: "border-blue-400/30",
    title: "text-blue-200",
    action: "bg-blue-600 hover:bg-blue-700 text-blue-50",
  },
  error: {
    content: "border-rose-400/30",
    title: "text-rose-200",
    action: "bg-rose-600 hover:bg-rose-700 text-rose-50",
  },
};

const AppAlertDialog = ({
  open,
  onOpenChange,
  title,
  description,
  actionLabel = "Got it",
  tone = "info",
}) => {
  const styles = toneStyles[tone] ?? toneStyles.info;

  return (
    <AlertDialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-[70] bg-blue-950/60 backdrop-blur-sm" />
        <AlertDialogPrimitive.Content
          className={`fixed left-1/2 top-1/2 z-[71] w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border bg-blue-900/90 px-6 py-7 text-blue-100 shadow-2xl ${styles.content}`}
        >
          <AlertDialogPrimitive.Title className={`text-2xl font-semibold ${styles.title}`}>
            {title}
          </AlertDialogPrimitive.Title>
          {description ? (
            <AlertDialogPrimitive.Description className="mt-3 text-sm leading-relaxed text-slate-300">
              {description}
            </AlertDialogPrimitive.Description>
          ) : null}
          <div className="mt-6 flex justify-end">
            <AlertDialogPrimitive.Action asChild>
              <button
                type="button"
                className={`rounded-xl px-5 py-2 text-sm font-semibold transition-colors duration-200 ${styles.action}`}
              >
                {actionLabel}
              </button>
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
};

export default AppAlertDialog;
