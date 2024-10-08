import { FC, useState } from "react";
import useSWR from "swr";
import { PersonIdentifyField } from "../types";
import Button from "./Button";
import { useAuth } from "./context/auth";
import DeletePersonIdentityFieldModal from "./modals/DeletePersonIdentityFieldModal";
import EditPersonIdentityFieldModal from "./modals/EditPersonIdentityFieldModal";
import { fetcher } from "./utils/fetcher";

type IdentityFieldNodeType = {
  uri: string;
  actions?: boolean;
};

const IdentityField: FC<IdentityFieldNodeType> = ({ uri, actions = false }) => {
  const [identityFieldModalOpen, setIdentityFieldModalOpen] =
    useState<boolean>(false);
  const [identityFieldModalDeleteOpen, setIdentityFieldModalDeleteOpen] =
    useState<boolean>(false);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const { user } = useAuth();

  const { data, isLoading, mutate } = useSWR<PersonIdentifyField>(uri, fetcher);

  if (isLoading || !data || isDeleted) return <></>;
  return (
    <div className="flex gap-2 justify-between items-center">
      <p>
        <strong>{data.typeIdentityField.name}</strong>: {data.value}
      </p>

      {user && actions ? (
        <div className="">
          <Button onClick={() => setIdentityFieldModalOpen(true)}>Edit</Button>
          <EditPersonIdentityFieldModal
            field={data}
            modalOpen={identityFieldModalOpen}
            setModalOpen={setIdentityFieldModalOpen as () => void}
            onClose={() => {
              mutate();
            }}
          />

          <Button onClick={() => setIdentityFieldModalDeleteOpen(true)}>
            Delete
          </Button>
          <DeletePersonIdentityFieldModal
            field={data}
            modalOpen={identityFieldModalDeleteOpen}
            setModalOpen={setIdentityFieldModalDeleteOpen as () => void}
            onClose={() => {
              setIsDeleted(true);
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default IdentityField;
