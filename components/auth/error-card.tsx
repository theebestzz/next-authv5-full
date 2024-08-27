import { CardWrapper } from "./card-wrapper";

import { HiOutlineExclamationTriangle } from "react-icons/hi2";

export function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <div className="w-full flex items-center justify-center">
        <HiOutlineExclamationTriangle className="text-destructive w-10 h-10" />
      </div>
    </CardWrapper>
  );
}
