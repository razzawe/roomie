const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const contacts = [
        { firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com' },
        { firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com' },
    ];

    const result = await prisma.contact.createMany({
        data: contacts,
    });
    console.log(result);
}

main()
    .catch(e => console.error(e))
    .finally(async () => await prisma.$disconnect());


