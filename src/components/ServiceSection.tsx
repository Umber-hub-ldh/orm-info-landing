'use client';

import { Container, Title, Text, SimpleGrid, ThemeIcon, Paper, rem, Box, Image as MantineImage } from '@mantine/core';
import NextImage from 'next/image';
import {
    IconCoin,
    IconUserStar,
    IconRocket,
    IconShieldCheck
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: IconCoin,
        title: '통신 비용 절감',
        description: '기업 전용 요금제와 약정 할인으로 기존 대비 최대 30% 통신비를 절감할 수 있습니다.',
    },
    {
        icon: IconUserStar,
        title: '1:1 전담 관리',
        description: '기업마다 전담 매니저가 배정되어 개통부터 유지보수, CS까지 책임지고 관리합니다.',
    },
    {
        icon: IconRocket,
        title: '신속한 업무 처리',
        description: '복잡한 서류 절차를 간소화하고, 당일 개통 및 배송을 원칙으로 빠르게 지원합니다.',
    },
    {
        icon: IconShieldCheck,
        title: '보증보험 면제',
        description: '신용 등급에 따라 할부 가능 회선수, 보증보험 면제 여부, 추가 할인율 등을 시스템적으로 확정됩니다.',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" } as const
    }
};

export function ServiceSection() {
    return (
        <Box
            py={120}
            id="services"
            style={{
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: '#ffffff'
            }}
        >
            {/* Background Image with separate opacity control */}
            <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                <MantineImage
                    component={NextImage}
                    src="/images/service_bg.png"
                    alt="Service Background"
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </Box>

            <Container size="lg" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Title order={2} ta="center" mt="sm" mb="md" c="navy.9" style={{ fontSize: '36px' }}>
                        오름정보통신을 선택해야 하는 이유
                    </Title>
                    <Text c="dimmed" ta="center" mb={60} maw={600} mx="auto" size="lg">
                        수많은 기업들이 이미 오름정보통신과 함께 성장하고 있습니다.
                        <br />검증된 노하우로 최상의 비즈니스 파트너가 되어드리겠습니다.
                    </Text>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                        {features.map((feature, index) => (
                            <Paper
                                component={motion.div}
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                key={feature.title}
                                shadow="sm"
                                radius="lg"
                                p={40}
                                withBorder
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '24px',
                                    border: '1px solid #E5E7EB',
                                    transition: 'box-shadow 0.3s ease',
                                    backgroundColor: 'white' // Ensure cards are readable
                                }}
                            >
                                <ThemeIcon
                                    size={60}
                                    radius="md"
                                    variant="light"
                                    color="orange"
                                    style={{ flexShrink: 0 }}
                                >
                                    <feature.icon style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
                                </ThemeIcon>
                                <div>
                                    <Text size="xl" fw={700} c="navy.9" mb="xs">
                                        {feature.title}
                                    </Text>
                                    <Text c="dimmed" lh={1.6} size="md">
                                        {feature.description}
                                    </Text>
                                </div>
                            </Paper>
                        ))}
                    </SimpleGrid>
                </motion.div>
            </Container>
        </Box>
    );
}
