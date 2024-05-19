"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";

export function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
		}
	}, []);

	function onDismiss() {
		router.back();
	}

	return createPortal(
		<div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0">
			<dialog
				ref={dialogRef}
				className="fixed flex items-center justify-center overflow-hidden w-full max-w-[700px] h-auto max-h-[700px] rounded-lg bg-white p-5 shadow-2xl"
				onClose={onDismiss}
			>
				{children}
				<ImCross
					onClick={onDismiss}
					size={15}
					className="flex items-center absolute top-4 right-4 cursor-pointer text-black"
				/>
			</dialog>
		</div>,
		document.getElementById("modal-root")!
	);
}