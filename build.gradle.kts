plugins {
	java
	id("org.springframework.boot") version "3.0.6"
	id("io.spring.dependency-management") version "1.1.0"
	id("dev.hilla") version "2.1.2"
	id("com.diffplug.spotless") version "6.18.0"
}

group = "cz.klecansky"
version = "0.0.1-SNAPSHOT"

val hillaVersion = "2.1.2"

java {
	sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("dev.hilla:hilla-react-spring-boot-starter")
	implementation("org.springframework.boot:spring-boot-starter-web")
	developmentOnly("org.springframework.boot:spring-boot-devtools")
	testImplementation("org.springframework.boot:spring-boot-starter-test")

}

dependencyManagement {
	imports {
		mavenBom("dev.hilla:hilla-bom:$hillaVersion")
	}
}

spotless {
	java {
		target("src/*/java/**/*.java")
		toggleOffOn()
		palantirJavaFormat()
		removeUnusedImports()
		trimTrailingWhitespace()
		endWithNewline()
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
