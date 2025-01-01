import { PortableTextComponents } from "@portabletext/react";

export const Components: PortableTextComponents = {
    block: {
        h4: ({ children }) => <h4 className="text-3xl font-bold text-red-400">{children}</h4>,
        strong: ({ children }) => <strong className="text-3xl font-bold text-red-400">{children}</strong>,

    },
    listItem: {
        bullet: ({ children }) => <li className="list-disc">{children}</li>,
        number: ({ children }) => <li className="list-decimal">{children}</li>,
        
    },
    marks:{
        strong: ({ children }) => <strong className="text-3xl font-bold text-red-700">{children}</strong>,
        
    }
    
}
