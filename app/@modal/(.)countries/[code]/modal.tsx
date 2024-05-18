'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { ImCross } from "react-icons/im";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 opacity-25">
      <dialog ref={dialogRef} className="relative flex items-center justify-center w-4/5 max-w-[500px] h-auto max-h-[500px] rounded-md bg-white p-5" onClose={onDismiss}>
        {children}
        <ImCross onClick={onDismiss} size={12} className="flex items-center absolute top-2.5 right-2.5 border-sm cursor-pointer text-black hover:bg-neutral-100" />
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}