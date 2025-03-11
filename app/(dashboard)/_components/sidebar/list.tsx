"use client";
import { useOrganizationList } from "@clerk/nextjs";
import { Item } from "./item";

export const List = () => {
    const { userMemberships } = useOrganizationList(
        {
            userMemberships: {
                infinite: true,
            }
        }
    );

    if (!userMemberships.data?.length) {
        return null;
    }

    return (
        <ul className="space-y-4">
            {userMemberships.data?.map((mem) => (
                <Item key={mem.organization.id} id={mem.organization.id} name={mem.organization.name} imageUrl={mem.organization.imageUrl} />
                // <li key={organization.id}>
                //     <a href={`/dashboard/organizations/${organization.id}`} className="flex items-center space-x-2">
                //         <img src={organization.logoUrl} alt={organization.name} className="w-8 h-8 rounded-full" />
                //         <span>{organization.name}</span>
                //     </a>
                // </li>
            ))}
        </ul>
    );
};