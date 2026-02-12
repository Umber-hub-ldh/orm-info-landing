'use client';

import { Container, Title, Text, SimpleGrid, Card, ThemeIcon, Box, rem } from '@mantine/core';
import {
    IconHeadset,
    IconSearch,
    IconFileInvoice,
    IconChecklist,
    IconTruckDelivery,
    IconDeviceMobile,
    IconUserCheck,
    IconSignature
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

const steps = [
    { icon: IconHeadset, title: '1. 문의/접수', description: '홈페이지를 통한 신속한 상담 접수' },
    { icon: IconSearch, title: '2. 사전 심사', description: '사업자 번호 기준 회선 조회 및 가입 한도 확인 (Pre-Check)' },
    { icon: IconFileInvoice, title: '3. 맞춤 견적', description: '기업 상황에 맞춘 최적의 단말기 및 요금제 제안' },
    { icon: IconSignature, title: '4. 계약서 작성', description: '전자계약 또는 서면 계약 진행' },
    { icon: IconChecklist, title: '5. 서류 접수', description: '필요 구비 서류 비대면 제출' },
    { icon: IconUserCheck, title: '6. 개통 진행', description: '통신사 전산 등록 및 처리' },
    { icon: IconTruckDelivery, title: '7. 안전 배송', description: '단말기 배송' },
    { icon: IconDeviceMobile, title: '8. 서비스 개통', description: '즉시 사용 가능하도록 개통' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.4 }
    }
};

export function Process() {
    return (
        <Box py={100} bg="gray.0" id="process">
            <Container size="lg">
                <Box mb={60} ta="center">
                    <Text c="orange" fw={700} tt="uppercase" mb="xs">Process Flow</Text>
                    <Title order={2} c="navy.9" mb="md" style={{ fontSize: '36px' }}>
                        체계적인 법인폰 개통 프로세스
                    </Title>
                    <Text c="dimmed" maw={600} mx="auto" size="lg">
                        문의부터 개통, 사후 관리까지 복잡한 절차 없이 간편하게 이용하세요.
                        오름정보통신이 모든 과정을 투명하고 신속하게 처리해 드립니다.
                    </Text>
                </Box>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
                        {steps.map((step, index) => (
                            <Card
                                component={motion.div}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                key={index}
                                padding="lg"
                                radius="md"
                                withBorder
                                style={{ transition: 'transform 0.2s ease' }}
                            >
                                <ThemeIcon
                                    size={50}
                                    radius="md"
                                    variant="light"
                                    color="navy"
                                    mb="md"
                                >
                                    <step.icon style={{ width: rem(26), height: rem(26) }} />
                                </ThemeIcon>
                                <Text fw={700} size="lg" mb="sm" c="navy.9">
                                    {step.title}
                                </Text>
                                <Text c="dimmed" size="sm" lh={1.6}>
                                    {step.description}
                                </Text>
                            </Card>
                        ))}
                    </SimpleGrid>
                </motion.div>
            </Container>
        </Box>
    );
}
