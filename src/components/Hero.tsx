'use client';

import { Container, Title, Text, Button, Group, Box, Overlay, Image as MantineImage } from '@mantine/core';
import NextImage from 'next/image';
import { IconArrowRight, IconCalculator } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <Box
            bg="navy.9"
            style={{
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '160px',
                paddingBottom: '160px',
            }}
        >
            {/* Explicit Next.js Image for Background */}
            <Box style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                <MantineImage
                    component={NextImage}
                    src="/images/hero_bg.png"
                    alt="Hero Background"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </Box>

            <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 44, 95, 0.95) 100%)" opacity={0.7} zIndex={1} />

            <Container size="lg" style={{ position: 'relative', zIndex: 2 }}>
                <Box maw={700}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" } as const}
                    >
                        <Text c="orange.4" fw={700} tt="uppercase" mb="md" size="sm" style={{ letterSpacing: '2px' }}>
                            Corporate Mobile Solution
                        </Text>

                        <Title
                            order={1}
                            c="white"
                            style={{
                                fontSize: '56px',
                                lineHeight: 1.2,
                                marginBottom: '24px',
                                fontWeight: 800
                            }}
                        >
                            성공적인 비즈니스를 위한<br />
                            <Text span c="orange" inherit>법인폰 토탈 솔루션</Text>
                        </Title>

                        <Text c="gray.1" size="xl" mb={50} lh={1.6}>
                            복잡한 통신 가입부터 개통, 관리까지 오름정보통신이 책임집니다.
                            <br />
                            기업 환경에 최적화된 요금 설계와 차별화된 혜택을 경험하세요.
                        </Text>

                        <Group>
                            <Button
                                component={motion.a}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                size="xl"
                                color="orange"
                                rightSection={<IconArrowRight size={20} />}
                                href="#consultation"
                                radius="md"
                            >
                                무료 견적 상담
                            </Button>
                            <Button
                                component={motion.button}
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                size="xl"
                                variant="outline"
                                color="white"
                                c="white"
                                leftSection={<IconCalculator size={20} />}
                                radius="md"
                            >
                                예상 절감액 확인
                            </Button>
                        </Group>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}
