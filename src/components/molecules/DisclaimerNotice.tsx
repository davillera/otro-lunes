import { DISCLAIMER } from "@/lib/copy";
import { Notice } from "./Notice";

/** Aviso de "guía general". En pantallas grandes ya vive dentro del tablero, así que aquí se oculta. */
export function DisclaimerNotice() {
  return <Notice className="lg:hidden">{DISCLAIMER}</Notice>;
}
